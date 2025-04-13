import React from "react";
import {
  Control,
  FieldValues,
  useFieldArray,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { CreatorInputs } from "./Creator";
import InputBox from "../ui/InputBox";
import {
  TbCircleLetterA,
  TbCircleLetterB,
  TbCircleLetterC,
  TbCircleLetterD,
  TbCircleLetterE,
  TbCircleLetterF,
  TbCircleLetterG,
  TbCircleLetterH,
  TbCircleLetterI,
  TbCircleLetterJ,
} from "react-icons/tb";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

interface AnswersProps {
  register: UseFormRegister<CreatorInputs>;
  control: Control<CreatorInputs>;
  errors: FieldValues;
  questionIndex: number;
  setValue: UseFormSetValue<CreatorInputs>;
}

export default function Answers({
  control,
  errors,
  register,
  questionIndex,
  setValue,
}: AnswersProps) {
  const {
    fields: answerFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `assessment_questions.${questionIndex}.answers`,
  });

  return (
    <div className="w-full px-4">
      <div>
        <p className="w-[60px] text-center text-xs ml-auto">Poprawna</p>
      </div>
      {answerFields.map((item, answerIndex) => (
        <div className="flex w-full gap-12 ml-7" key={item.id}>
          <div className="flex h-full justify-center items-center w-full">
            <button
              onClick={() => remove(answerIndex)}
              className="p-1 hover:bg-slate-100 text-red-500 w-6 h-6 rounded-lg mb-2 mr-5 flex justify-center items-center"
            >
              <RxCross2 size={18} />
            </button>
            <InputBox
              id={`assessment_questions.${questionIndex}.answers.${answerIndex}.answer_text`}
              type="text"
              label={answersIcons[answerIndex].label}
              error={
                errors.assessment_questions?.[questionIndex]?.answers?.[
                  answerIndex
                ]?.answer_text?.message
              }
              register={register}
              icon={answersIcons[answerIndex].icon}
            />
          </div>
          <div className="h-[36px] flex justify-start  flex-col mt-4 mr-12">
            <div className="relative flex justify-start items-center w-full">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="peer hidden"
                  id={`assessment_questions.${questionIndex}.answers.${answerIndex}.is_correct`}
                  {...register(
                    `assessment_questions.${questionIndex}.answers.${answerIndex}.is_correct`
                  )}
                />
                <span
                  className={clsx(
                    "h-4 w-4 border-2 rounded-md flex items-center justify-center transition-colors duration-300",
                    "peer-checked:border-mainGreen peer-checked:bg-mainGreen"
                  )}
                >
                  <span className="w-full h-full items-center justify-center text-white">
                    <FaCheck size={10} className="ml-[1px] mt-[1px]" />
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-end w-full">
        <button
          type="button"
          className="text-center text-sm hover:text-mainGreen underline transition-colors duration-300 mt-2"
          onClick={() => {
            if (answerFields.length < 10) {
              append({
                answer_text: "",
                is_correct: false,
              });
            } else {
              toast.error("Możesz dodać maksymalnie 10 odpowiedzi.");
            }
          }}
        >
          {" "}
          Dodaj odpowiedź
        </button>
      </div>
    </div>
  );
}

export const answersIcons = [
  {
    icon: <TbCircleLetterA size={20} />,
    label: "Odpowiedź A",
  },
  {
    icon: <TbCircleLetterB size={20} />,
    label: "Odpowiedź B",
  },
  {
    icon: <TbCircleLetterC size={20} />,
    label: "Odpowiedź C",
  },
  {
    icon: <TbCircleLetterD size={20} />,
    label: "Odpowiedź D",
  },
  {
    icon: <TbCircleLetterE size={20} />,
    label: "Odpowiedź E",
  },
  {
    icon: <TbCircleLetterF size={20} />,
    label: "Odpowiedź F",
  },
  {
    icon: <TbCircleLetterG size={20} />,
    label: "Odpowiedź G",
  },
  {
    icon: <TbCircleLetterH size={20} />,
    label: "Odpowiedź H",
  },
  {
    icon: <TbCircleLetterI size={20} />,
    label: "Odpowiedź I",
  },
  {
    icon: <TbCircleLetterJ size={20} />,
    label: "Odpowiedź J",
  },
];
