import { useSearchParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

interface TagsFilterProps {
  handleFilter: ({ param, filter }: { param: string; filter: string }) => void;
}

export default function TagsFilter({ handleFilter }: TagsFilterProps) {
  const searchParams = useSearchParams();
  const [tag, setTag] = React.useState("");

  const [tags, setTags] = React.useState<string[]>(
    searchParams.get("tags")
      ? decodeURIComponent(searchParams.get("tags") || "").split(",")
      : []
  );

  React.useEffect(() => {
    handleFilter({
      param: "tags",
      filter: encodeURIComponent(tags.join(",")),
    });
  }, [tags]);

  return (
    <div className="py-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
      {tags.map((tag, i) => (
        <div
          className="py-2 px-3 border-stone-300 border rounded-md flex justify-center items-center gap-2"
          key={i}
        >
          <p>{tag}</p>
          <button
            onClick={() => {
              setTags((prev) => prev.filter((t) => t !== tag));
            }}
            className="p-1 hover:bg-whiteSecond transition-colors duration-300 rounded-md text-red-500"
          >
            <RxCross1 />
          </button>
        </div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (tag === "" || tag.trim() === "") return;

          if (tag.length > 25) {
            toast.error("Tag nie może być dłuższy niż 25 znaków.");
            return;
          }

          if (tags.includes(tag)) {
            toast.error("Tag już istnieje.");
            return;
          }

          if (tags.length > 4) {
            toast.error("Możesz dodać maksymalnie 5 tagów.");
            return;
          }

          setTags((prev) => [...prev, tag]);
          setTag("");
        }}
        className="flex justify-center items-center gap-2 border border-stone-300 rounded-md px-3 py-2"
      >
        <input
          type="text"
          id="skill"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="outline-none border-none"
          placeholder="Zawiera tag..."
        />
        <button
          type="submit"
          className="hover:bg-whiteSecond text-mainGreen  transition-colors duration-300 rounded-md p-1"
        >
          <FaCheck />
        </button>
      </form>
    </div>
  );
}
