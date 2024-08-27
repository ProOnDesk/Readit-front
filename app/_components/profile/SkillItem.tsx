"use client";

import { useRemoveSkillItem } from "@/app/_hooks/useRemoveSkillItem";
import React from "react";
import { RxCross1 } from "react-icons/rx";

interface SkillItemProps {
  skill_name: string;
  id: number;
}

export default function SkillItem({ id, skill_name }: SkillItemProps) {
  const { removeSkillItemHookFn, isLoading } = useRemoveSkillItem();

  return (
    <div className="py-2 px-3 border-stone-300 border rounded-md flex justify-center items-center gap-2">
      <p>{skill_name}</p>
      <button
        onClick={() => {
          removeSkillItemHookFn({ id: String(id) });
        }}
        className="p-1 hover:bg-whiteSecond transition-colors duration-300 rounded-md text-red-500"
      >
        <RxCross1 />
      </button>
    </div>
  );
}
