"use client";

import Opinion from "./Opinion";
import Pagination from "./Pagination";
import { Pagination as PaginationMui } from "@mui/material";
import MakeOpinion from "./MakeOpinion";
import { useGetArticleOpinionsQuery } from "@/app/_redux/features/articleApiSLice";
import Spinner from "../ui/Spinner";
import { useGetCollectionsByArticleIdQuery } from "@/app/_redux/features/collectionsApiSlice";
import { useEffect, useState } from "react";
import { useRetrieveUserQuery } from "@/app/_redux/features/authApiSlice";
import CollectionItemLoader from "../content/CollectionItemLoader";
import CollectionItem from "../content/CollectionItem";
import Modal from "../ui/Modal";

export const revalidate = 0;

interface OpinionsProps {
  articleId: number;
  authorId: number;
  searchParams: any;
  isPossibleToMakeOpinion?: boolean;
}

interface Opinion {
  content: string;
  rating: number;
  id: number;
  author: {
    id: number;
    first_name: string;
    last_name: string;
    avatar_url: string;
  };
  article_id: number;
  created_at: string;
}

const SIZE_OF_PAGE = 10;

export default function OpinionSection({
  articleId,
  authorId,
  searchParams,
  isPossibleToMakeOpinion = false,
}: OpinionsProps) {
  const { data, isLoading, refetch } = useGetArticleOpinionsQuery({
    article_id: articleId,
    page: searchParams?.page ?? 1,
    size: SIZE_OF_PAGE,
    sort_order: "desc",
  });
  const [page, setPage] = useState("1");
  const {
    data: userCollections,
    isLoading: isLoadingCollections,
    isFetching,
  } = useGetCollectionsByArticleIdQuery({
    page: page || "1",
    article_id: articleId,
  });
  const [isCreator, setIsCreator] = useState(false);
  const { data: user } = useRetrieveUserQuery();

  useEffect(() => {
    if (!isLoading)
      setIsCreator(userCollections?.items.at(0)?.owner_id === user?.id);
  }, [isLoading, userCollections, user?.id]);

  if (isLoading || isLoadingCollections)
    return (
      <div className="py-10">
        <Spinner color="green" size="small" />
      </div>
    );

  return (
    <>
      <div>
        <>
          {userCollections?.items.length !== 0 && (
            <div className="">
              <div className="flex w-full justify-between items-start flex-col sm500:items-center sm500:flex-row gap-3">
                <div className="flex justify-center items-center gap-2 py-3">
                  <h4 className="text-2xl font-medium">
                    Dobre wieści, materiał jest w{" "}
                    {userCollections?.items.length !== 1
                      ? `${userCollections?.items.length} zestawach`
                      : "zestawie"}
                    !
                  </h4>
                </div>
              </div>
              <div className="pt-4">
                <Modal>
                  <div className="grid grid-cols-1 sm550:grid-cols-2 md:grid-cols-1 md900:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6">
                    {isLoading || isFetching ? (
                      <>
                        {Array.from({ length: 12 }).map((_, i) => (
                          <CollectionItemLoader key={i} />
                        ))}
                      </>
                    ) : (
                      userCollections?.items.map((collection, i) => (
                        <CollectionItem
                          collection={collection}
                          key={i}
                          refetch={refetch}
                          isCreator={isCreator}
                          showDetails
                        />
                      ))
                    )}
                  </div>
                </Modal>
                <div className="w-full flex justify-center items-center py-8 sm:py-12">
                  {userCollections?.pages && userCollections.pages > 1 && (
                    <PaginationMui
                      sx={{
                        "& .Mui-selected": {
                          backgroundColor: "#9ef01a !important",
                          color: "#ffffff !important",
                          "&:hover": {
                            backgroundColor: "#70e000 !important",
                          },
                        },
                      }}
                      count={userCollections?.pages || 1}
                      page={+page}
                      disabled={
                        userCollections?.pages === 1 || !userCollections
                      }
                      onChange={(_event, value) => setPage(value.toString())}
                      color="primary"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      </div>
      <div className="flex flex-col gap-6">
        {isPossibleToMakeOpinion && (
          <MakeOpinion
            articleId={articleId}
            authorId={authorId}
            refetchOpinions={refetch}
          />
        )}
        <p className="text-3xl font-medium mb-5">Opinie</p>
        {data?.items &&
          data.items.map((item: any) => (
            <Opinion
              key={item.id}
              authorName={item.author.first_name}
              imageSrc={item.author.avatar_url}
              rating={item.rating}
              review={item.content}
            />
          ))}
        {data?.items.length === 0 && (
          <p className="text-center text-lg">Brak opinii</p>
        )}
        <div>
          <Pagination data={data} SIZE_OF_PAGE={SIZE_OF_PAGE} />
        </div>
      </div>
    </>
  );
}
