"use client";

import { User } from "@/app/_redux/features/authApiSlice";
import React from "react";
import SkillItemAddInput from "./SkillItemAddInput";
import SkillItem from "./SkillItem";

interface SkillsProps {
  user: User | undefined;
}

export default function Skills({ user }: SkillsProps) {
  return (
    <div className="px-8 mt-12 sm:px-12 lg:px-20 lg1200:px-12 max-w-[1200px] mx-auto bg-white md900:mt-0 md900:py-8 lg1200:py-10 lg1200:mt-4 lg1200:rounded-2xl lg1200:shadow-lg">
      <h4 className="text-2xl font-medium lg1200:mb-4">Umiejętności</h4>
      <div className="py-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
        {user?.skill_list.map((skill, i) => (
          <SkillItem key={i} skill_name={skill.skill_name} id={skill.id} />
        ))}
        {user?.skill_list.length === 0 && (
          <span>Tutaj wpisz swoje umiejętności</span>
        )}
        <SkillItemAddInput />
      </div>
    </div>
  );
}
