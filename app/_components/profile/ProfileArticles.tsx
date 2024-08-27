import { User } from "@/app/_redux/features/authApiSlice";
import Link from "next/link";
import React from "react";
import ArticleItem from "./ArticleItem";

interface ProfileArticlesProps {
  user: User | undefined;
}

export default function ProfileArticles({ user }: ProfileArticlesProps) {
  return (
    <div className="px-8 mt-10">
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <h4 className="text-2xl font-medium">
            Materiały <span className="h-1 w-1 bg-stone-300 rounded-full" />{" "}
          </h4>
          <span className="h-1 w-1 bg-stone-400 rounded-full" />
          <span className="font-normal text-xl text-slate-400">
            {user?.article_count}{" "}
          </span>
        </div>
        {user?.article_count !== 0 && (
          <Link
            href="/app/create"
            className="bg-mainGreen text-white hover:bg-mainGreenSecond transition-colors duration-300 rounded-md px-4 py-2"
          >
            Stwórz nowy
          </Link>
        )}
      </div>
      <div className="py-4">
        {user?.article_count === 0 && (
          <div className="flex w-full justify-center items-center gap-6 flex-col text-center py-32">
            <p>
              Nie utworzono żadnych materiałów, może czas zmienić decyzję i
              zacząć zarabiać na swojej wiedzy?
            </p>
            <Link
              href="/app/create"
              className="bg-mainGreen text-white hover:bg-mainGreenSecond transition-colors duration-300 rounded-md px-4 py-2"
            >
              Stwórz nowy
            </Link>
          </div>
        )}
        {user?.articles.map((article) => (
          <ArticleItem article={article} />
        ))}
      </div>
    </div>
  );
}
