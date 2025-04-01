import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionClassNames {
  root?: string;
  item?: string;
  button?: string;
  title?: string;
  icon?: string;
  panel?: string;
  content?: string;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  classNames?: AccordionClassNames;
}

export function SimpleAccordion({ items, classNames }: AccordionProps) {
  return (
    <Accordion type="single" className={cn("w-full", classNames?.root)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className={cn("border-b", classNames?.item)}
        >
          <AccordionTrigger
            className={cn(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              classNames?.button
            )}
          >
            <span className={classNames?.title}>{item.title}</span>
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
              classNames?.panel
            )}
          >
            <div className={cn("pb-4 pt-0", classNames?.content)}>
              {item.content}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
