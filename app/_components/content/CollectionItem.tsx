"use client";

import {
  Collection,
  CollectionsPagination,
} from "@/app/_redux/features/collectionsApiSlice";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  QueryActionCreatorResult,
  QueryDefinition,
} from "@reduxjs/toolkit/query";
import Image from "next/image";
import { TiStar } from "react-icons/ti";
import Modal from "../ui/Modal";
import EditPackageModal from "./EditPackageModal";
import DetailsPackageModal from "./DetailsPackageModal";
import { useEffect, useState } from "react";

interface ArticleItemProps {
  collection: Collection;
  showDetails?: boolean;
  isCreator?: boolean;
  refetch: () => QueryActionCreatorResult<
    QueryDefinition<
      {
        page: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      never,
      CollectionsPagination,
      "api"
    >
  >;
}

export default function CollectionItem({
  collection,
  isCreator = false,
  refetch,
  showDetails,
}: ArticleItemProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Modal.Open opens={String(collection.id)}>
        <button className="w-full max-h-[355px] flex flex-col justify-start items-start shadow-xl rounded-lg overflow-hidden group">
          <div className="relative w-full aspect-video overflow-hidden object-contain object-center">
            <Image
              fill
              src={collection.collection_image_url}
              className="object-cover object-center w-full h-full"
              alt={`${collection.title} image`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
          </div>
          <div className="w-full h-[148px] px-3 py-2 flex justify-between items-start flex-col pb-2">
            <div className="flex justify-between w-full items-center text-xs gap-1">
              <p className="text-sm text-slate-400 py-1 text-left">
                Zestaw{" "}
                <span className="font-semibold">
                  {collection.articles_count}
                </span>{" "}
                materiałów
              </p>
              <p className="font-medium flex justify-center items-center gap-1">
                {collection.rating.toPrecision(3)}{" "}
                <span className="text-yellow-500 text-xl">
                  <TiStar />
                </span>
              </p>
            </div>
            <div className="h-[56px]">
              <h4 className="text-xl font-semibold line-clamp-2 text-left">
                {collection.title}
              </h4>
            </div>
            <div className="w-full mt-2">
              <p className="text-right font-bold">
                {collection.price.toPrecision(3)} PLN
              </p>
            </div>
          </div>
        </button>
      </Modal.Open>
      <Modal.Window name={String(collection.id)}>
        {isClient && showDetails ? (
          <DetailsPackageModal
            packageId={collection.id}
            isCreator={isCreator}
            onCloseModal={undefined as never}
          />
        ) : (
          isCreator && (
            <EditPackageModal
              onCloseModal={undefined as never}
              packageId={collection.id}
              refetch={refetch}
            />
          )
        )}
      </Modal.Window>
    </>
  );
}
