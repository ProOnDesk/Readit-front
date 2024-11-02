"use client";

import { useGetMyCollectionsQuery } from "@/app/_redux/features/collectionsApiSlice";
import { Pagination } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CollectionItem from "../content/CollectionItem";
import CollectionItemLoader from "../content/CollectionItemLoader";
import Modal from "../ui/Modal";

export default function Packages() {
  const [page, setPage] = useState("1");
  const {
    data: userCollections,
    isLoading,
    isFetching,
    refetch,
  } = useGetMyCollectionsQuery({
    page: page || "1",
  });

  return (
    <div className="px-8 mt-10 sm:px-12 lg:px-20 lg1200:px-12 max-w-[1200px] mx-auto bg-white md900:mt-0 md900:py-8 lg1200:py-10 lg1200:mt-4 lg1200:rounded-2xl lg1200:shadow-lg ">
      <div className="flex w-full justify-between items-start flex-col sm500:items-center sm500:flex-row gap-3">
        <div className="flex justify-center items-center gap-2">
          <h4 className="text-2xl font-medium">
            Zestawy <span className="h-1 w-1 bg-stone-300 rounded-full" />{" "}
          </h4>
          <span className="h-1 w-1 bg-stone-400 rounded-full" />
          <span className="font-normal text-xl text-slate-400">
            {userCollections?.total}
          </span>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link
            href="/app/content"
            className="border border-stone-300 rounded-md px-4 py-2"
          >
            Zarządzaj
          </Link>
        </div>
      </div>
      <div className="pt-4">
        {userCollections?.items.length === 0 && (
          <div className="flex justify-center items-center w-full h-[300px]">
            <p className="text-lg font-semibold text-center">
              Nie masz jeszcze żadnych zestawów
            </p>
          </div>
        )}
        <Modal>
          <div className="grid grid-cols-1 sm550:grid-cols-2 md800:grid-cols-3 lg1100:grid-cols-4 gap-x-3 gap-y-6">
            {isLoading || isFetching ? (
              <>
                {Array.from({ length: 12 }).map((_, i) => (
                  <CollectionItemLoader key={i} />
                ))}
              </>
            ) : (
              userCollections?.items.map((collection, i) => (
                <CollectionItem
                  collection={collection}
                  key={i}
                  refetch={refetch}
                  isCreator
                  showDetails
                />
              ))
            )}
          </div>
        </Modal>
        <div className="w-full flex justify-center items-center py-8 sm:py-12">
          {userCollections?.pages && userCollections.pages > 1 && (
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
              count={userCollections?.pages || 1}
              page={+page}
              disabled={userCollections?.pages === 1 || !userCollections}
              onChange={(_event, value) => setPage(value.toString())}
              color="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
}
