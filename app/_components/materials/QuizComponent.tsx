import React, { useState } from "react";
import Spinner from "../ui/Spinner";
import { FaCheck } from "react-icons/fa";
import clsx from "clsx";
import { useSendEmailWithQuizScoreMutation } from "@/app/_redux/features/articleApiSLice";
import toast from "react-hot-toast";

interface QuizSectionProps {
  article_title: string;
  isArticleLoading: boolean;
  assessment_questions: {
    question_text: string;
    answers: {
      answer_text: string;
      is_correct: boolean;
    }[];
  }[];
}

export default function QuizComponent({
  assessment_questions,
  isArticleLoading,
  article_title,
}: QuizSectionProps) {
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [senEmailWithScore] = useSendEmailWithQuizScoreMutation();
  const [score, setScore] = useState(0);

  console.log(
    assessment_questions
      .flatMap((question) => question.answers)
      .filter((answer) => answer.is_correct).length
  );
  return (
    <div className="">
      <p className="text-2xl text-center font-semibold mb-3">
        Quiz sprawdzający wiedzę
      </p>

      {isArticleLoading ? (
        <div className="flex justify-center items-center h-full w-full py-10">
          <Spinner />
        </div>
      ) : (
        assessment_questions.map((question, index) => (
          <div key={index} className="mb-1 p-4 text-lg">
            <p className="font-semibold">{question.question_text}</p>
            <ul className="pl-5 mt-2">
              {question.answers.map((answer, idx) => (
                <div
                  key={idx}
                  className="flex justify-start flex-col mt-4 mr-12"
                >
                  <div className="relative flex justify-start items-center w-full">
                    <label className="flex items-center cursor-pointer w-full gap-4">
                      <input
                        type="checkbox"
                        className="peer hidden"
                        disabled={showCorrectAnswers}
                        onChange={(e) => {
                          if (e.target.checked && answer.is_correct) {
                            setScore(score + 1);
                          }
                        }}
                      />
                      <span
                        className={clsx(
                          "h-5 w-5 border-2 rounded-md flex items-center justify-center transition-colors duration-300",
                          "peer-checked:border-mainGreen peer-checked:bg-mainGreen",
                          showCorrectAnswers &&
                            (answer.is_correct
                              ? "peer-checked:bg-mainGreen peer-checked:border-mainGreen border-red-500"
                              : "peer-checked:bg-red-500 peer-checked:border-red-500")
                        )}
                      >
                        <span className="w-full h-full items-center justify-center text-white">
                          <FaCheck size={10} className="ml-[3px] mt-[3px]" />
                        </span>
                      </span>
                      <span
                        className={clsx(
                          "transition-colors",
                          showCorrectAnswers &&
                            (answer.is_correct
                              ? "peer-checked:text-mainGreen text-red-500"
                              : "peer-checked:text-red-500")
                        )}
                      >
                        {answer.answer_text}
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </ul>
            <div className="h-[1px] w-full bg-slate-200 mt-7" />
          </div>
        ))
      )}
      <div className="flex justify-center items-center w-full pt-12 pb-14">
        {showCorrectAnswers ? (
          <p className="text-center leading-relaxed">
            <span className="block font-semibold text-lg mb-2">
              Świetna robota!
            </span>
            Zdobyłeś <strong>{score}</strong> na{" "}
            <strong>
              {
                assessment_questions
                  .flatMap((question) => question.answers)
                  .filter((answer) => answer.is_correct).length
              }
            </strong>{" "}
            możliwych punktów. Każda poprawna odpowiedź to krok bliżej
            osiągnięcia celu.
            <br />
            <br />
            Twój wynik został wysłany na Twój adres e-mail — potraktuj go jako
            pamiątkę oraz dowód Twojego postępu 🚀
          </p>
        ) : (
          <button
            className="text-center rounded-full bg-mainGreen text-white font-medium text-lg hover:bg-mainGreenSecond transition-colors duration-300 px-5 py-2 mx-auto mt-2"
            disabled={showCorrectAnswers}
            onClick={() => {
              setShowCorrectAnswers(true);
              senEmailWithScore({
                score: score,
                total: assessment_questions
                  .flatMap((question) => question.answers)
                  .filter((answer) => answer.is_correct).length,
                article_title: article_title,
              })
                .unwrap()
                .then(() => {
                  toast.success("Wynik został wysłany na Twój adres e-mail");
                })
                .catch((err) => {
                  toast.error(err.message);
                  console.log(err);
                });
            }}
          >
            Sprawdź
          </button>
        )}
      </div>
    </div>
  );
}
