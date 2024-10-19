"use client";

import { PaginationTypeArticles } from "@/app/_redux/features/articlesApiSlice";
import { GetUserTypePaginated } from "@/app/_redux/features/authApiSlice";
import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

interface PaginationArticlesProps {
  data?: PaginationTypeArticles | GetUserTypePaginated;
  isBrowse?: boolean;
}

export default function PaginationArticles({
  data,
  isBrowse,
}: PaginationArticlesProps) {
  const [header, setHeader] = React.useState<Element | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setHeader(document.querySelector("#browseHeader"));
  }, []);

  const createPageURL = (event: React.ChangeEvent<unknown>, value: number) => {
    if (isBrowse) {
      const elementBottom = header
        ? header.getBoundingClientRect().bottom + window.scrollY - 64
        : 0;
      window.scrollTo({
        top: elementBottom, // Scroll to the bottom of the element
        behavior: "smooth",
      });
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    router.replace(`${path}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="w-full flex justify-center items-center py-10 col-start-1 col-end-3">
      <Pagination
        sx={{
          "& .Mui-selected": {
            backgroundColor: "#9ef01a !important",
            color: "#ffffff !important",
            "&:hover": {
              backgroundColor: "#70e000 !important",
            },
          },
        }}
        count={data?.pages || 1}
        disabled={data?.pages === 1 || !data}
        defaultPage={+(new URLSearchParams(searchParams).get("page") || 1)}
        onChange={createPageURL}
        color="primary"
      />
    </div>
  );
}
