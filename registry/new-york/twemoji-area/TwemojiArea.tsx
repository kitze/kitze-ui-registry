import { ReactFC } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { ErrorBoundary } from "react-error-boundary";
import twemoji from "@twemoji/api";
import {
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
  cloneElement,
  ReactNode,
  Fragment,
  ReactElement,
  memo,
  useMemo,
} from "react";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const;

export type TwemojiAreaProps = {
  children: ReactNode;
  size?: Size;
  className?: string;
};

// Helper function to process text nodes and replace emojis
function processTextNode(text: string, size: Size = "md"): ReactNode[] {
  // Skip empty or non-string inputs
  if (!text || typeof text !== "string") {
    return [text];
  }

  try {
    const container = document.createElement("div");
    container.textContent = text;
    twemoji.parse(container);

    // Convert the container's HTML content back to React elements
    const processed: ReactNode[] = [];
    container.childNodes.forEach((node, index) => {
      if (node.nodeType === Node.TEXT_NODE) {
        processed.push(node.textContent);
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        node instanceof HTMLImageElement
      ) {
        processed.push(
          <img
            key={`emoji-${index}`}
            src={node.src}
            alt={node.alt}
            className={cn("inline-block", sizeClasses[size])}
            style={{
              height: "1em",
              width: "1em",
              margin: "0 0.05em 0 0.1em",
              verticalAlign: "-0.1em",
            }}
          />
        );
      }
    });

    return processed;
  } catch (error) {
    console.warn("Failed to process emoji in text:", error);
    return [text]; // Return original text on error
  }
}

interface ReactElementWithChildren extends ReactElement {
  props: {
    children?: ReactNode;
    [key: string]: any;
  };
}

// Recursive function to process React nodes
const processNode = (node: ReactNode, size: Size): ReactNode => {
  // Handle null or undefined
  if (node == null) {
    return node;
  }

  // Handle text nodes
  if (typeof node === "string") {
    return processTextNode(node, size);
  }

  // Handle arrays
  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <Fragment key={index}>{processNode(child, size)}</Fragment>
    ));
  }

  // Handle React elements
  if (isValidElement(node)) {
    const element = node as ReactElementWithChildren;

    // Skip processing for elements that might already handle emojis
    if (
      element.type === "img" ||
      element.type === "svg" ||
      element.type === "canvas"
    ) {
      return element;
    }

    const children = element.props.children
      ? Children.map(element.props.children, (child) =>
          processNode(child, size)
        )
      : element.props.children;

    return cloneElement(element, {
      ...element.props,
      children,
    });
  }

  // Return as is for other types
  return node;
};

export const TwemojiArea = memo(
  ({ children, size = "md", className }: TwemojiAreaProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      return () => setIsMounted(false);
    }, []);

    // If not yet mounted, render children without processing to avoid hydration issues
    if (!isMounted) {
      return <div className={className}>{children}</div>;
    }

    // Memoize processed children to avoid unnecessary re-processing
    const processedChildren = useMemo(() => {
      return processNode(children, size);
    }, [children, size]);

    return (
      <ErrorBoundary
        fallback={<div className={className}>{children}</div>}
        onError={(error: Error) => {
          console.warn("TwemojiArea failed to render:", error);
        }}
      >
        <div className={className}>{processedChildren}</div>
      </ErrorBoundary>
    );
  }
);
