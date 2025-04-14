"use client";

import React from "react";
import Modal from "../ui/Modal";
import QuizComponent from "./QuizComponent";
import { useGetArticleDetailsByIdQuery } from "@/app/_redux/features/articleApiSLice";

interface QuizSectionProps {
  articleId: number;
}

export default function QuizSection({ articleId }: QuizSectionProps) {
  const { data: article, isLoading: isArticleLoading } =
    useGetArticleDetailsByIdQuery({
      article_id: articleId,
    });

  if (article?.assessment_questions.length === 0 || isArticleLoading) {
    return null;
  }

  return (
    <div>
      <p className="text-2xl font-medium mb-5 ml-4 text-center">
        <span className="text-mainGreen">Sprawdź się!</span> Rozwiąż quiz
        sprawdzający wiedzę z przerobionego materiału.
      </p>
      <Modal>
        <Modal.Open opens="quiz">
          <div className="w-full flex justify-center items-center">
            <button className="text-center rounded-full bg-mainGreen text-white font-medium text-lg hover:bg-mainGreenSecond transition-colors duration-300 px-5 py-2 mx-auto mt-2">
              Do Quizu
            </button>
          </div>
        </Modal.Open>
        <Modal.Window name="quiz">
          <div>
            <p className="text-2xl text-center font-semibold">
              Quiz sprawdzający wiedzę
            </p>
            <p className="max-w-3xl mt-3">
              Zanim przejdziesz dalej, sprawdź,{" "}
              <span className="text-mainGreenSecond">
                jak dobrze przyswoiłeś materiał.
              </span>{" "}
              Ten quiz został przygotowany{" "}
              <span className="text-mainGreenSecond">przez autora treści</span>{" "}
              specjalnie dla Ciebie, by pomóc utrwalić najważniejsze informacje
              i wyłapać ewentualne luki w wiedzy.
              <br />
              <br />
              Pytania zostały dobrane w taki sposób, aby maksymalnie wykorzystać{" "}
              <span className="text-mainGreenSecond">Twój potencjał</span> —
              skupiają się na kluczowych aspektach materiału i wymagają nie
              tylko zapamiętywania, ale również zrozumienia kontekstu.{" "}
              <span className="text-mainGreenSecond">Nie spiesz się</span> —
              potraktuj ten quiz jako formę aktywnej nauki, a nie tylko test.
              <br />
              <br />
              Gotowy? Kliknij{" "}
              <span className="text-mainGreenSecond">„Rozpocznij quiz”</span> i
              przekonaj się, ile zapamiętałeś!
            </p>
            <div className="w-full flex justify-center items-center mt-5">
              <Modal.Open opens="quiz-start">
                <button className="text-center rounded-full bg-mainGreen text-white font-medium  hover:bg-mainGreenSecond transition-colors duration-300 px-5 py-2 mx-auto mt-2">
                  Rozpocznij quiz
                </button>
              </Modal.Open>
            </div>
          </div>
        </Modal.Window>
        <Modal.Window name="quiz-start" version="forQuiz">
          <QuizComponent
            isArticleLoading={isArticleLoading}
            assessment_questions={article?.assessment_questions}
            article_title={article?.title}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}
