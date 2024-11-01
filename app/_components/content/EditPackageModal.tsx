import React, { useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import InputBox from "../ui/InputBox";
import { FieldValues, useForm } from "react-hook-form";
import { LuPencilLine } from "react-icons/lu";
import AddArticlesToPackage from "./AddArticlesToPackage";
import { Article } from "@/app/_redux/features/authApiSlice";

interface EditPackageModalProps {
  packageId?: number;
  onCloseModal: () => void;
}

export default function EditPackageModal({
  packageId,
  onCloseModal,
}: EditPackageModalProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>();
  const [articlesInPackage, setArticlesInPackage] = useState<Article[]>([]);

  const onSubmit = (data: FieldValues) => {
    console.log({ ...data, articles_id: articlesInPackage.map((a) => a.id) });
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
          type="text"
          label="Procent zniżki przy zakupie zestawu"
          error={errors?.discount_percentage?.message}
          register={register}
          icon={<LuPencilLine size={20} />}
        />
        <div className="w-full">
          <textarea
            className="w-full max-w-full outline-none border-none p-1 min-h-[10vh] max-h-[20vh] h-[clamp(10vh,15vh,20vh)]"
            placeholder="Dodaj opis zestawu"
            {...register("desc", {
              required: "Opis jest wymagany",
            })}
          />
          {errors?.desc && (
            <p className="text-red-500 text-xs mt-1">
              {typeof errors.desc.message === "string" && errors.desc.message}
            </p>
          )}
        </div>
        <AddArticlesToPackage
          articlesInPackage={articlesInPackage}
          setArticlesInPackage={setArticlesInPackage}
        />
        <div className="w-full flex justify-end items-center">
          <p className="mr-3 space-x-2">
            <span className="line-through">
              {articlesInPackage.map((a) => a.price).reduce((a, b) => a + b, 0)}{" "}
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
          <button
            type="submit"
            className="bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white rounded-md px-4 py-2"
          >
            Zapisz zestaw
          </button>
        </div>
      </form>
    </div>
  );
}
