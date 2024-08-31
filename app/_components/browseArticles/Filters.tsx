import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Filters() {
  return (
    <div className="px-4 max-w-[400px] mx-auto w-full md:px-14">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="focus:no-underline hover:no-underline  outline-none group text-black">
            <p>Cena</p>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="focus:no-underline hover:no-underline  outline-none group text-black">
            <p>Oceny</p>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="focus:no-underline hover:no-underline  outline-none group text-black">
            <p>Zawiera Tagi</p>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
              <p>3.0 i więcej</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
