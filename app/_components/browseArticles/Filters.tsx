"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import TagsFilter from "./TagsFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  function handleFilter({ param, filter }: { param: string; filter: string }) {
    const params = new URLSearchParams(searchParams);
    if (filter === "") {
      params.delete(param);
    } else {
      params.set(param, filter);
    }
    router.replace(`${path}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="px-4 max-w-[400px] mx-auto w-full md:px-14">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="focus:no-underline hover:no-underline  outline-none group text-black">
            <p>Cena</p>
          </AccordionTrigger>
          <AccordionContent>
            <PriceFilter handleFilter={handleFilter} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="focus:no-underline hover:no-underline  outline-none group text-black">
            <p>Oceny</p>
          </AccordionTrigger>
          <AccordionContent>
            <RatingFilter handleFilter={handleFilter} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="focus:no-underline hover:no-underline  outline-none group text-black">
            <p>Zawiera Tagi</p>
          </AccordionTrigger>
          <AccordionContent>
            <TagsFilter handleFilter={handleFilter} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
