import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="max-w-2xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>What are AI Credits?</AccordionTrigger>
        <AccordionContent>
          AI Credits are used to power all AI operations on our platform. 1 credit ≈ 1,000 tokens.
          Document processing uses 10-50 credits, content generation uses 5-20 credits.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I change plans anytime?</AccordionTrigger>
        <AccordionContent>
          Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately,
          and we'll prorate any charges or credits.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
        <AccordionContent>
          Yes! We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied,
          we'll refund your payment in full.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
