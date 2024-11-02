import { useGetCollectionByIdMutation } from "@/app/_redux/features/collectionsApiSlice";
import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Spinner from "../ui/Spinner";
import { TiStar } from "react-icons/ti";
import Link from "next/link";

interface DetailsPackageModalProps {
  packageId: number;
  isCreator?: boolean;
  onCloseModal: () => void;
}

export default function DetailsPackageModal({
  packageId,
  isCreator,
  onCloseModal,
}: DetailsPackageModalProps) {
  const [
    getCollectionDetails,
    { isLoading: isLoadingDetails, data: collection },
  ] = useGetCollectionByIdMutation();

  useEffect(() => {
    if (packageId) {
      getCollectionDetails({ collection_id: packageId });
    }
  }, [packageId, getCollectionDetails]);

  return (
    <div>
      {isLoadingDetails ? (
        <div className="h-[80vh] flex justify-center items-center">
          <Spinner color="green" />
        </div>
      ) : (
        <>
          <div className="flex w-full justify-between items-center ">
            <p className="font-medium text-2xl">{collection?.title}</p>
            <button
              onClick={onCloseModal}
              className="p-1 hover:bg-whiteSecond transition-colors duration-300 rounded-md"
            >
              <RxCross1 size={24} />
            </button>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3 mt-5">
            <div className="w-full">
              <p className="w-full p-1 text-left">
                {collection?.short_description}
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="text-lg font-semibold">
                {collection?.articles_count} artykułów
              </p>
              <p className="text-lg font-semibold">
                {collection?.rating.toFixed(2)}{" "}
                <TiStar className="text-yellow-400" />
              </p>
              <div className="w-full flex justify-end items-center">
                {isCreator ? (
                  <Link href="/app/content" className="">
                    Zarządzaj
                  </Link>
                ) : (
                  <button
                    type="submit"
                    className="bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white rounded-md px-4 py-2"
                  >
                    Zakup zestaw
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
