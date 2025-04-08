import React, { useState } from "react";
import { FieldValues, Form, useForm } from "react-hook-form";
import InputBox from "../ui/InputBox";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineQuestionMark } from "react-icons/md";
import {
  TbCircleLetterA,
  TbCircleLetterB,
  TbCircleLetterC,
  TbCircleLetterD,
} from "react-icons/tb";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

export default function QuizForm() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<FieldValues>();

  const [correctAnswerA, setCorrectAnswerA] = useState(false);
  const [correctAnswerB, setCorrectAnswerB] = useState(false);
  const [correctAnswerC, setCorrectAnswerC] = useState(false);
  const [correctAnswerD, setCorrectAnswerD] = useState(false);

  return (
    <div className="w-full my-4">
      <p className="text-center w-full text-3xl">Quiz</p>
      <p className="w-full text-center">
        Możesz dodać opcjonalne pytania na temat utworzonych materiałów.
      </p>
      <form className="w-3/4 mx-auto my-10">
        <InputBox
          id="title"
          type="text"
          label="Treść pytania"
          error={errors?.title?.message}
          register={register}
          icon={<MdOutlineQuestionMark size={20} />}
        />{" "}
        <div>
          <div>
            <p className="w-[60px] text-center text-xs ml-auto">Poprawna</p>
          </div>
          <div className="flex w-full gap-12 ml-7">
            <InputBox
              id="answerA"
              type="text"
              label="Odpowiedź A"
              error={errors?.title?.message}
              register={register}
              icon={<TbCircleLetterA size={20} />}
            />
            <div className="h-[36px] flex justify-start  flex-col mt-4 mr-12">
              <div className="relative flex justify-start items-center w-full">
                <label
                  htmlFor="correctAnswerA"
                  className="text-xs cursor-pointer flex justify-center items-center"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    id="correctAnswerA"
                    {...register("correctAnswerA", {
                      onChange: () => setCorrectAnswerA((s) => !s),
                    })}
                  />
                  <span
                    className={clsx(
                      "h-4 w-4  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
                      correctAnswerA && "border-mainGreen"
                    )}
                  >
                    {correctAnswerA && (
                      <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                        <FaCheck size={10} className="ml-[1px]" />
                      </span>
                    )}{" "}
                  </span>
                </label>
              </div>
              <p className="text-xs mt-1 text-red-500">
                {errors?.correctAnswerA?.message &&
                  errors.correctAnswerA.message.toString()}
              </p>
            </div>
          </div>

          <div className="flex w-full gap-12 ml-7">
            <InputBox
              id="answerB"
              type="text"
              label="Odpowiedź B"
              error={errors?.title?.message}
              register={register}
              icon={<TbCircleLetterB size={20} />}
            />
            <div className="h-[36px] flex justify-start  flex-col mt-4 mr-12">
              <div className="relative flex justify-start items-center w-full">
                <label
                  htmlFor="correctAnswerB"
                  className="text-xs cursor-pointer flex justify-center items-center"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    id="correctAnswerB"
                    {...register("correctAnswerB", {
                      onChange: () => setCorrectAnswerB((s) => !s),
                    })}
                  />
                  <span
                    className={clsx(
                      "h-4 w-4  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
                      correctAnswerB && "border-mainGreen"
                    )}
                  >
                    {correctAnswerB && (
                      <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                        <FaCheck size={10} className="ml-[1px]" />
                      </span>
                    )}{" "}
                  </span>
                </label>
              </div>
              <p className="text-xs mt-1 text-red-500">
                {errors?.correctAnswerB?.message &&
                  errors.correctAnswerB.message.toString()}
              </p>
            </div>
          </div>

          <div className="flex w-full gap-12 ml-7">
            <InputBox
              id="answerC"
              type="text"
              label="Odpowiedź C"
              error={errors?.title?.message}
              register={register}
              icon={<TbCircleLetterC size={20} />}
            />
            <div className="h-[36px] flex justify-start  flex-col mt-4 mr-12">
              <div className="relative flex justify-start items-center w-full">
                <label
                  htmlFor="correctAnswerC"
                  className="text-xs cursor-pointer flex justify-center items-center"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    id="correctAnswerC"
                    {...register("correctAnswerC", {
                      onChange: () => setCorrectAnswerC((s) => !s),
                    })}
                  />
                  <span
                    className={clsx(
                      "h-4 w-4  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
                      correctAnswerC && "border-mainGreen"
                    )}
                  >
                    {correctAnswerC && (
                      <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                        <FaCheck size={10} className="ml-[1px]" />
                      </span>
                    )}{" "}
                  </span>
                </label>
              </div>
              <p className="text-xs mt-1 text-red-500">
                {errors?.correctAnswerC?.message &&
                  errors.correctAnswerC.message.toString()}
              </p>
            </div>
          </div>

          <div className="flex w-full gap-12 ml-7">
            <InputBox
              id="answerD"
              type="text"
              label="Odpowiedź D"
              error={errors?.title?.message}
              register={register}
              icon={<TbCircleLetterD size={20} />}
            />
            <div className="h-[36px] flex justify-start flex-col mt-4 mr-12">
              <div className="relative flex justify-start items-center w-full">
                <label
                  htmlFor="correctAnswerD"
                  className="text-xs cursor-pointer flex justify-center items-center"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    id="correctAnswerD"
                    {...register("correctAnswerD", {
                      onChange: () => setCorrectAnswerD((s) => !s),
                    })}
                  />
                  <span
                    className={clsx(
                      "h-4 w-4  border-2 rounded-md cursor-pointer transition-colors duration-300 hover:border-mainGreen flex items-center justify-center",
                      correctAnswerD && "border-mainGreen"
                    )}
                  >
                    {correctAnswerD && (
                      <span className="bg-mainGreen w-full h-full flex justify-center items-center text-white">
                        <FaCheck size={10} className="ml-[1px]" />
                      </span>
                    )}{" "}
                  </span>
                </label>
              </div>
              <p className="text-xs mt-1 text-red-500">
                {errors?.correctAnswerD?.message &&
                  errors.correctAnswerD.message.toString()}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
