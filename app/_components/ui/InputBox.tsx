"use client";

import React, { useEffect, useState } from "react";
import {
    FieldError,
    FieldErrorsImpl,
    FieldValues,
    Merge,
    UseFormRegister,
} from "react-hook-form";

interface InputBoxProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  type?: "text" | "email" | "number" | "password";
  validateFunction?: () => boolean | string;
  id: string;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  icon: React.ReactNode;
}

export default function InputBox({
  type = "text",
  id,
  label,
  error,
  validateFunction,
  register,
  icon,
}: InputBoxProps) {
  const [inputValue, setInputValue] = useState<string | number>("");
  const [focus, setFocus] = useState(false);

  function changeValue(val: string | number) {
    setInputValue(val);
  }

  useEffect(
    function () {
      if (inputValue) {
        setFocus(true);
      }
    },
    [inputValue, focus]
  );

  return (
    <div className="relative h-[50px] w-full flex justify-center items-center px-2">
      <div className={`${focus ? "text-mainGreen" : "text-blackSecond"} transition-colors duration-300`}>
        {icon}
      </div>
      <input
        id={id}
        className="border-none focus:outline-none px-3 py-2 w-full"
        type={type}
        placeholder={label}
        {...register(id, {
          required: "This field is required",
          validate: validateFunction,
          onChange: (e) => changeValue(e.target.value),
          onBlur: () => setFocus(false),
        })}
        onFocus={() => setFocus(true)}
      />
      <div className="absolute bottom-0 left-0 h-[1.5px] w-full bg-mainGreen"></div>
      {error && (
        <p className="text-[10px] mt-1 text-main2">{error.toString()}</p>
      )}
    </div>
  );
}
