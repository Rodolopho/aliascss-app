import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

 import './index.jsx.css';

 const Accordion = (props) => (
// const Accordion = (props: AccordionPrimitive.AccordionSingleProps) => (
  <AccordionPrimitive.Root {...props} className={String(" background-whiteThemeA12 border-radius-8px box-shadow-0px-0px-0px-1px-grayThemeA3 width-80p")} />
);
const AccordionItem = (props) => (
// const AccordionItem = (props: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item {...props} className={String("oh mt-1px bxs-0px-1px-0px-grayTheme6 --fw[pr,zi-1,bxs-0px-0px-0px-2px-blueTheme8] --fc[mt-0,btlr-8px,btrr-8px] --lc[bblr-8px,bbrr-8px]")} />
);

const AccordionTrigger = React.forwardRef
// <
//   HTMLButtonElement,
//   React.ComponentProps<typeof AccordionPrimitive.Trigger>
//   React.ComponentProps<typeof AccordionPrimitive.Trigger>
// >
(({ children, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className={String("@base-all-unset df")}>
    <AccordionPrimitive.Trigger
      {...props}
      className={String("@base-all-unset py-0 px-16px h-48px df jcsb aic flex-1 ff--font-sans fs-14px lh-1 c-grayTheme12 tn-box-shadow-300ms [data-open]-bxs-0px-1px-0px-grayTheme6")}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className={String("c-grayThemeA9 tn-transform-300ms ttf--ttf:cubic-bezier(0.87,0,0,1) [data-state=open]&-transform-r-180deg")} aria-hidden />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
const AccordionContent = React.forwardRef
// <
//   HTMLDivElement,
//   React.ComponentProps<typeof AccordionPrimitive.Content>
// >
(({ children, className,...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    {...props}
    className={String("oh fs-14px c-grayThemeA11 bgc-grayThemeA2 lh-1d5 m-1px  [data-state=open][an-slide-down,adu-300ms,atf--atf:cubic-bezier(0.87,0,0.13,1),afm-forwards]  [data-state=closed][an-slide-up,adu-300ms,atf--atf:cubic-bezier(0.87,0,0.13,1),afm-forwards]")+' '+ className}
    ref={forwardedRef}
  >
    <div className="padding-15px-20px">{children}</div>
  </AccordionPrimitive.Content>
));

export default function AccordionDemo() {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible
keyframes-slide-down="@0-h-0 @100-h--radix-accordion-content-height"
    keyframes-slide-up="@100-h-0 @0-h--radix-accordion-content-height"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yeso. The Accordion adheres to the WAI‑ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent className="">
          Yes. The Accordion is unstyled by default, giving you freedom over the
          look and feel.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
