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
      params.set("page", "1");
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
      <div className="h-10 mt-5">
        <button
          className="w-full h-full bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white rounded-full"
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.delete("min_price");
            params.delete("max_price");
            params.delete("min_rating");
            params.delete("tags");
            params.delete("is_free");
            params.delete("value");
            params.set("page", "1");
            router.replace(`${path}?${params.toString()}`, { scroll: false });
          }}
        >
          <span>{searchParams.size - 3 <= 0 ? "" : searchParams.size - 3}</span>{" "}
          Wyczyść filtry
        </button>
      </div>
    </div>
  );
}
