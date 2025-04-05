import {
  useEffect,
  useRef,
  Children,
  cloneElement,
  createElement,
  ReactNode,
  memo,
  useMemo,
  useCallback,
} from "react";
import twemoji from "@twemoji/api";

export interface TwemojiReactProps {
  children?: ReactNode;
  noWrapper?: boolean;
  options?: object;
  tag?: string;
}

// Simple object comparison function to replace lodash isEqual
const shallowEqual = (objA: any, objB: any): boolean => {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};

export const TwemojiReact = memo(
  ({
    children,
    noWrapper = false,
    options = {},
    tag = "div",
    ...other
  }: TwemojiReactProps) => {
    const rootRef = useRef<HTMLElement>(null);
    const childrenRefs = useRef<{ [key: string]: any }>({});
    const prevPropsRef = useRef<TwemojiReactProps | null>(null);

    // Memoize current props to avoid unnecessary re-renders
    const currentProps = useMemo(
      () => ({
        children,
        noWrapper,
        options,
        tag,
      }),
      [children, noWrapper, options, tag]
    );

    // Memoize parse function to avoid recreating it on each render
    const parseTwemoji = useCallback(() => {
      try {
        if (noWrapper) {
          Object.values(childrenRefs.current).forEach((ref) => {
            if (ref.current) {
              twemoji.parse(ref.current, options);
            }
          });
        } else if (rootRef.current) {
          twemoji.parse(rootRef.current, options);
        }
      } catch (error) {
        console.warn("Failed to parse twemoji:", error);
      }
    }, [noWrapper, options]);

    useEffect(() => {
      // Only parse if props have changed
      if (!shallowEqual(currentProps, prevPropsRef.current)) {
        parseTwemoji();
        prevPropsRef.current = currentProps;
      }
    }, [currentProps, parseTwemoji]);

    if (noWrapper) {
      return (
        <>
          {Children.map(children, (child, index) => {
            if (typeof child === "string") {
              // Create a span for string children when using noWrapper
              return (
                <span
                  ref={(el) => {
                    if (!childrenRefs.current[index]) {
                      childrenRefs.current[index] = { current: null };
                    }
                    childrenRefs.current[index].current = el;
                  }}
                  dangerouslySetInnerHTML={{ __html: child }}
                />
              );
            }

            if (!childrenRefs.current[index]) {
              childrenRefs.current[index] = { current: null };
            }

            return cloneElement(child as any, {
              ref: (el: any) => {
                childrenRefs.current[index].current = el;

                // Call the original ref if it exists
                const originalRef = (child as any).ref;
                if (originalRef) {
                  if (typeof originalRef === "function") {
                    originalRef(el);
                  } else if (originalRef.hasOwnProperty("current")) {
                    originalRef.current = el;
                  }
                }
              },
            });
          })}
        </>
      );
    }

    const elementProps = { ...other, ref: rootRef };
    delete (elementProps as any).options;
    return createElement(tag, elementProps, children);
  }
);
