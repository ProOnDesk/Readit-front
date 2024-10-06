"use client";

import { PaginationTypeArticles } from "@/app/_redux/features/articlesApiSlice";
import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface PaginationArticlesProps {
  data: PaginationTypeArticles;
}

export default function PaginationArticles({ data }: PaginationArticlesProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  const createPageURL = (event: React.ChangeEvent<unknown>, value: number) => {
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
        count={data?.pages}
        defaultPage={+(new URLSearchParams(searchParams).get("page") || 1)}
        onChange={createPageURL}
        color="primary"
      />
    </div>
  );
}
