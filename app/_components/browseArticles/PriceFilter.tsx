import { useDebounce } from "@/app/_hooks/useDebounce";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface PriceFilterProps {
  handleFilter: ({ param, filter }: { param: string; filter: string }) => void;
}

export default function PriceFilter({ handleFilter }: PriceFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  const [priceFrom, setPriceFrom] = useState(
    searchParams.get("min_price") || ""
  );
  const debouncedValueFrom = useDebounce(priceFrom, 1000);

  const [priceTo, setPriceTo] = useState(searchParams.get("max_price") || "");
  const debouncedValueTo = useDebounce(priceTo, 1000);

  const [free, setFree] = useState(false);

  useEffect(() => {
    if (free) {
      setPriceFrom("");
      setPriceTo("");
      handleFilter({ param: "min_price", filter: "" });
      handleFilter({ param: "max_price", filter: "" });
    }
  }, [free, setPriceFrom, setPriceTo, handleFilter]);

  useEffect(() => {
    const change = setTimeout(() => {
      if (priceFrom !== "" && priceTo !== "") {
        if (parseInt(priceFrom) > parseInt(priceTo)) {
          const params = new URLSearchParams(searchParams);
          params.set("min_price", priceTo);
          params.set("max_price", priceFrom);
          router.replace(`${path}?${params.toString()}`, { scroll: false });
          setPriceFrom(priceTo);
          setPriceTo(priceFrom);
        }
      }
    }, 800);

    return () => clearTimeout(change);
  }, [
    priceFrom,
    priceTo,
    setPriceFrom,
    setPriceTo,
    searchParams,
    router,
    path,
  ]);

  useEffect(
    function () {
      if (debouncedValueFrom !== "") {
        handleFilter({
          param: "min_price",
          filter: debouncedValueFrom,
        });
      }
    },
    [debouncedValueFrom, handleFilter]
  );

  useEffect(
    function () {
      if (priceFrom === "") {
        handleFilter({ param: "min_price", filter: "" });
      }
    },
    [priceFrom, handleFilter]
  );

  useEffect(
    function () {
      if (debouncedValueTo !== "") {
        handleFilter({
          param: "max_price",
          filter: debouncedValueTo,
        });
      }
    },
    [debouncedValueTo, handleFilter]
  );

  useEffect(
    function () {
      if (priceTo === "") {
        handleFilter({ param: "max_price", filter: "" });
      }
    },
    [priceTo, handleFilter]
  );

  useEffect(() => {
    handleFilter({
      param: "is_free",
      filter: free ? "true" : "",
    });
  }, [free, handleFilter]);

  return (
    <div>
      <div className="flex justify-center items-center w-full gap-2">
        {" "}
        <div
          className={`h-10 w-full border-2 rounded-md grid  items-center px-1 hover:border-mainGreen transition-colors duration-300 ${
            free && "bg-gray-100"
          }`}
        >
          <input
            type="number"
            min="0"
            placeholder="Cena od..."
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            className="w-full outline-none px-3 py-2 text-sm custom-number-input disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300"
            disabled={free}
          />
        </div>
        <div
          className={`h-10 w-full border-2 rounded-md grid  items-center px-1 hover:border-mainGreen transition-colors duration-300 ${
            free && "bg-gray-100"
          }`}
        >
          <input
            type="number"
            min="0"
            placeholder="Cena do..."
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            className="w-full outline-none px-3 py-2 text-sm custom-number-input disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-300"
            disabled={free}
          />
        </div>
      </div>
      <div className="flex justify-start items-center mt-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={free}
            onChange={(e) => setFree(e.target.checked)}
            className="hidden"
          />
          <span
            className={clsx(
              "h-5 w-5  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
              free && "border-mainGreen"
            )}
          >
            {free && (
              <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                <FaCheck size={12} className="" />
              </span>
            )}{" "}
          </span>
          <span className="cursor-pointer text-base">Darmowe</span>
        </label>
      </div>
    </div>
  );
}
