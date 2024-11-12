import { useDeleteCollectionByIdMutation } from "@/app/_redux/features/collectionsApiSlice";
import React from "react";
import toast from "react-hot-toast";

interface DeletePackageModalProps {
  collectionId: number;
  title: string | undefined;
  close: () => void;
  refetch: () => void;
  onCloseModal: () => void;
}

export default function DeletePackageModal({
  close,
  collectionId,
  title,
  onCloseModal,
  refetch,
}: DeletePackageModalProps) {
  const [deleteCollectionById, { isLoading: isDeleting }] =
    useDeleteCollectionByIdMutation();
  return (
    <div className="flex flex-col justify-center items-end gap-5">
      <p className="w-full text-left sm500:text-lg">
        Czy na pewno chcesz usunąć zestaw{" "}
        <span className="font-semibold">&quot;{title}&quot;</span>? Zestawu nie
        będzie już można przywrócić.
      </p>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => {
            deleteCollectionById({ collection_id: collectionId })
              .unwrap()
              .then(() => {
                refetch();
                close();
                toast.success("Zestaw został usunięty");
              })
              .catch((error) => {
                console.error(error);
                toast.error("Nie udało się usunąć zestawu");
              });
          }}
          disabled={isDeleting}
          className="border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 text-red-500 rounded-md px-4 py-2 mr-3"
        >
          Usuń
        </button>
        <button
          className="bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white rounded-md px-4 py-2"
          onClick={onCloseModal}
        >
          Anuluj
        </button>
      </div>
    </div>
  );
}
