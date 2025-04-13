import {
  Control,
  FieldValues,
  useFieldArray,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { MdOutlineQuestionMark } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import InputBox from "../ui/InputBox";
import Answers from "./Answers";
import { CreatorInputs } from "./Creator";

interface QuizFormProps {
  register: UseFormRegister<CreatorInputs>;
  control: Control<CreatorInputs>;
  errors: FieldValues;
  setValue: UseFormSetValue<CreatorInputs>;
}

export default function QuizForm({
  control,
  register,
  errors,
  setValue,
}: QuizFormProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "assessment_questions",
  });

  return (
    <div className="w-full my-4">
      <p className="text-center w-full text-3xl">Quiz</p>
      <p className="w-full text-center">
        Możesz dodać opcjonalne pytania na temat utworzonych materiałów.
      </p>
      {fields.map((item, questionIndex) => {
        return (
          <div
            key={item.id}
            className="flex justify-between items-center flex-col w-full my-4 max-w-[800px] mx-auto"
          >
            <div className="w-full flex justify-between items-center">
              <InputBox
                id={`assessment_questions.${questionIndex}.question_text`}
                type="text"
                label="Treść pytania"
                error={
                  errors.assessment_questions?.[questionIndex]?.question_text
                    ?.message
                }
                register={register}
                icon={<MdOutlineQuestionMark size={20} />}
              />{" "}
              <button
                onClick={() => remove(questionIndex)}
                className="hover:bg-slate-100 text-red-500 w-8 h-8 flex justify-center items-center rounded-lg mb-2 ml-5"
              >
                <RxCross2 size={22} />
              </button>
            </div>
            <Answers
              control={control}
              errors={errors}
              register={register}
              questionIndex={questionIndex}
              setValue={setValue}
            />
          </div>
        );
      })}
      <div className="flex justify-center items-center w-full my-4">
        <button
          type="button"
          className="text-center rounded-full bg-mainGreen text-white font-medium text-base hover:bg-mainGreenSecond transition-colors duration-300 px-5 py-2 mx-auto mt-10"
          onClick={() =>
            append({
              question_text: "",
              answers: [
                { answer_text: "", is_correct: false },
                { answer_text: "", is_correct: false },
                { answer_text: "", is_correct: false },
                { answer_text: "", is_correct: false },
              ],
            })
          }
        >
          Dodaj pytanie
        </button>
      </div>
    </div>
  );
}
