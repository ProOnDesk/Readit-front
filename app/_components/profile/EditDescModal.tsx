"use client";

import { useUpdateUser } from "@/app/_hooks/useUpdateUser";
import { User } from "@/app/_redux/features/authApiSlice";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";

interface EditDescModalProps {
  type: "normal" | "short";
  onCloseModal: () => void;
  user: User | undefined;
}

export default function EditDescModal({
  type,
  onCloseModal,
  user,
}: EditDescModalProps) {
  const { updateUserHookFn, isLoading, isSuccess } = useUpdateUser({
    successMsg: `${
      type === "short" ? "Biogram" : "Opis"
    } został zaktualizowany`,
    errorMsg: "Wystąpił błąd podczas aktualizacji opisu",
  });
  const [desc, setDesc] = useState(
    type === "short"
      ? user?.short_description
        ? user.short_description
        : ""
      : user?.description
      ? user.description
      : ""
  );

  useEffect(() => {
    if (isSuccess) {
      onCloseModal();
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col w-full" >
      <div className="flex w-full justify-between items-center ">
        <p className="font-medium text-2xl">
          Edytuj {type === "short" ? "biogram" : "opis"}
        </p>
        <button
          onClick={onCloseModal}
          className="p-1 hover:bg-whiteSecond transition-colors duration-300 rounded-md"
        >
          <RxCross1 size={24} />
        </button>
      </div>
      <p className="mt-3">
        {type === "short"
          ? "Napisz to co każdy odwiedzający powienien o Tobie wiedzieć"
          : "Napisz kilka słów o sobie, czym się zajmujesz, doświadczenie, zainteresowania itp."}
      </p>
      <p className="mt-2 text-stone-400">
        Możesz wpisać maksymalnie {type === "short" ? "250" : "1000"} znaków
      </p>
      <textarea
        className="w-full max-w-full outline-none border-none p-1 min-h-[20vh] max-h-[50vh] h-[clamp(20vh,35vh,50vh)]"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        className=" bg-mainGreen px-4 py-2 hover:bg-mainGreenSecond transition-colors duration-300 ml-auto text-white rounded-md mt-5"
        onClick={() => {
          if (type === "short") {
            if (desc.length > 250) {
              toast.error("Biogram nie może przekraczać 250 znaków");
              return;
            }

            if (user?.short_description === desc) return;

            updateUserHookFn({
              fieldToUpdate: "short_description",
              valueToUpdate: desc,
            });
          } else {
            if (desc.length > 1000) {
              toast.error("Opis nie może przekraczać 1000 znaków");
              return;
            }

            if (user?.description === desc) return;

            updateUserHookFn({
              fieldToUpdate: "description",
              valueToUpdate: desc,
            });
          }
        }}
      >
        {isLoading ? <Spinner /> : "Zapisz"}
      </button>
    </div>
  );
}
