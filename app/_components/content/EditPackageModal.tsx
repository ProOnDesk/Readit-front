import { Article } from "@/app/_redux/features/authApiSlice";
import {
  CollectionsPagination,
  useCreateCollectionMutation,
  useDeleteCollectionByIdMutation,
  useEditCollectionByIdMutation,
  useGetCollectionByIdMutation,
} from "@/app/_redux/features/collectionsApiSlice";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  QueryActionCreatorResult,
  QueryDefinition,
} from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuPencilLine } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import InputBox from "../ui/InputBox";
import AddArticlesToPackage from "./AddArticlesToPackage";
import CollectionsImageUploader from "./CollectionsImageUploader";
import Spinner from "../ui/Spinner";
import DeletePackageModal from "./DeletePackageModal";
import Modal from "../ui/Modal";

interface EditPackageModalProps {
  packageId?: number;
  onCloseModal: () => void;
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

export default function EditPackageModal({
  packageId,
  onCloseModal,
  refetch,
}: EditPackageModalProps) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>();
  const [
    getCollectionDetails,
    { isLoading: isLoadingDetails, data: collection },
  ] = useGetCollectionByIdMutation();
  const [editCollecionById, { isLoading: isLoadingEdit }] =
    useEditCollectionByIdMutation();

  const [articlesInPackage, setArticlesInPackage] = useState<Article[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const [createCollection, { isLoading }] = useCreateCollectionMutation();

  useEffect(() => {
    if (packageId) {
      getCollectionDetails({ collection_id: packageId })
        .unwrap()
        .then((res) => {
          setArticlesInPackage(res.articles);
          fetch(res.collection_image_url)
            .then((response) => response.blob())
            .then((blob) => {
              const file = new File([blob], "collection_image.jpg", {
                type: blob.type,
              });
              setFile(file);
            });
          setValue("title", res.title);
          setValue("discount_percentage", res.discount_percentage);
          setValue("short_description", res.short_description);
        })
        .catch((err) => {
          toast.error(err.message);
          console.log(err);
        });
    }
  }, [packageId, getCollectionDetails, setValue]);

  const onSubmit = async (data: FieldValues) => {
    if (articlesInPackage.length < 2) {
      return toast.error("Zestaw musi zawierać przynajmniej 2 artykuły");
    }

    if (!file) {
      return toast.error("Dodaj miniaturkę zestawu");
    }

    if (packageId) {
      editCollecionById({
        data: { ...data, articles_id: articlesInPackage.map((a) => a.id) },
        file,
        collection_id: packageId,
      })
        .unwrap()
        .then(() => {
          toast.success("Zestaw został zaktualizowany");
          onCloseModal();
          refetch();
        })
        .catch((err) => {
          toast.error(err.message);
          console.log(err);
        });
      return;
    }

    createCollection({
      data: { ...data, articles_id: articlesInPackage.map((a) => a.id) },
      file,
    })
      .unwrap()
      .then(() => {
        toast.success("Zestaw został dodany");
        onCloseModal();
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center ">
        <p className="font-medium text-2xl">
          {packageId ? "Edytuj zestaw" : "Utwórz zestaw"}
        </p>
        <button
          onClick={onCloseModal}
          className="p-1 hover:bg-whiteSecond transition-colors duration-300 rounded-md"
        >
          <RxCross1 size={24} />
        </button>
      </div>
      {isLoadingDetails ? (
        <div className="h-[80vh] flex justify-center items-center">
          <Spinner color="green" />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-center items-center gap-3 mt-5"
        >
          <InputBox
            id="title"
            type="text"
            label="Tytuł zestawu"
            error={errors?.title?.message}
            register={register}
            icon={<LuPencilLine size={20} />}
          />
          <InputBox
            id="discount_percentage"
            type="number"
            max={100}
            min={0}
            label="Procent zniżki przy zakupie zestawu"
            error={errors?.discount_percentage?.message}
            register={register}
            icon={<LuPencilLine size={20} />}
          />
          <div className="w-full">
            <textarea
              className="w-full max-w-full outline-none border-none p-1 min-h-[10vh] max-h-[20vh] h-[clamp(10vh,15vh,20vh)]"
              placeholder="Dodaj opis zestawu"
              {...register("short_description", {
                required: "Opis jest wymagany",
              })}
            />
            {errors?.desc && (
              <p className="text-red-500 text-xs mt-1">
                {typeof errors.desc.message === "string" && errors.desc.message}
              </p>
            )}
          </div>
          <p className="text-lg font-semibold w-full text-left">
            Dodaj miniaturkę zestawu:
          </p>
          <CollectionsImageUploader file={file} setFile={setFile} />
          <AddArticlesToPackage
            articlesInPackage={articlesInPackage}
            setArticlesInPackage={setArticlesInPackage}
          />
          <div className="w-full flex justify-end items-center">
            <p className="mr-3 space-x-2">
              <span className="line-through">
                {articlesInPackage
                  .map((a) => a.price)
                  .reduce((a, b) => a + b, 0)}{" "}
                PLN
              </span>
              <span className="font-bold">
                {articlesInPackage
                  .map((a) => a.price)
                  .reduce((a, b) => a + b, 0) *
                  ((100 - getValues("discount_percentage")) / 100) || 0}{" "}
                PLN
              </span>
            </p>
            {packageId && (
              <Modal>
                <Modal.Open opens="delete">
                  <button
                    type="button"
                    className="border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 text-red-500 rounded-md px-4 py-2 mr-3"
                  >
                    Usuń zestaw
                  </button>
                </Modal.Open>
                <Modal.Window name="delete" version="second">
                  <DeletePackageModal
                    close={onCloseModal}
                    refetch={refetch}
                    collectionId={packageId}
                    title={collection?.title}
                    onCloseModal={undefined as never}
                  />
                </Modal.Window>
              </Modal>
            )}
            <button
              type="submit"
              disabled={isLoading || isLoadingEdit || isLoadingDetails}
              className="bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white rounded-md px-4 py-2"
            >
              {packageId ? "Zaktualizuj zestaw" : "Utwórz zestaw"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
