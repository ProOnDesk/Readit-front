"use client";

import { useGetMyCollectionsQuery } from "@/app/_redux/features/collectionsApiSlice";
import { Pagination } from "@mui/material";
import { useState } from "react";
import Modal from "../ui/Modal";
import CollectionItem from "./CollectionItem";
import CollectionItemLoader from "./CollectionItemLoader";
import EditPackageModal from "./EditPackageModal";

export default function MyPackagesSection() {
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
    <div className="max-w-[1800px] mx-auto px-4 sm500:px-8 sm:px-12 lg:px-16">
      <div className="flex flex-col sm400:flex-row w-full justify-between items-start sm400:items-center gap-5 pb-12 pt-4 md:pb-16 mb:pt-8  lg:pb-20 lg:pt-12">
        <div className="">
          <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left">
            Zestawy
          </h3>
          <p>Utworzone zestawy: {userCollections?.total}</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Modal>
            <Modal.Open opens="package">
              <button className="bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white rounded-md px-4 py-2">
                Utwórz Zestaw
              </button>
            </Modal.Open>
            <Modal.Window name="package">
              <EditPackageModal
                onCloseModal={undefined as never}
                refetch={refetch}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <Modal>
        {userCollections?.items.length === 0 && (
          <div className="flex justify-center items-center w-full h-[300px]">
            <p className="text-lg font-semibold text-center">
              Nie masz jeszcze żadnych zestawów
            </p>
          </div>
        )}
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
              />
            ))
          )}
        </div>
      </Modal>
      <div className="w-full flex justify-center items-center py-12 sm:py-16">
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
  );
}
