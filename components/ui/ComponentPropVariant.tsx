import React from "react";

interface ComponentPropVariantProps<
  T extends React.ElementType,
  K extends keyof React.ComponentProps<T>
> {
  component: T;
  variants: {
    prop: K;
    values: Array<React.ComponentProps<T>[K]>;
    label?: string;
  };
  children?:
    | React.ReactNode
    | ((value: React.ComponentProps<T>[K], index: number) => React.ReactNode);
  className?: string;
  renderItem?: (
    props: Record<K, React.ComponentProps<T>[K]> & React.ComponentProps<T>
  ) => React.ReactNode;
  componentProps?: Omit<React.ComponentProps<T>, K>;
}

export function ComponentPropVariant<
  T extends React.ElementType,
  K extends keyof React.ComponentProps<T>
>({
  component: Component,
  variants,
  children,
  className = "grid grid-cols-4 gap-4",
  renderItem,
  componentProps = {} as Omit<React.ComponentProps<T>, K>,
}: ComponentPropVariantProps<T, K>) {
  return (
    <div className={className}>
      {variants.values.map((value, index) => {
        const itemProps = {
          ...componentProps,
          [variants.prop]: value,
        } as React.ComponentProps<T>;

        if (renderItem) {
          return (
            <React.Fragment key={index}>
              {renderItem({ ...itemProps, [variants.prop]: value } as Record<
                K,
                React.ComponentProps<T>[K]
              > &
                React.ComponentProps<T>)}
            </React.Fragment>
          );
        }

        const content =
          typeof children === "function"
            ? children(value, index)
            : children ||
              (typeof value === "string" ? value : `Variant ${index + 1}`);

        return React.createElement(
          Component,
          { key: index, ...itemProps },
          content
        );
      })}
    </div>
  );
}
