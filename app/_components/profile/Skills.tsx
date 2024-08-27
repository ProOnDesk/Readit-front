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
    <div className="px-8 mt-12">
      <h4 className="text-2xl font-medium">Umiejętności</h4>
      <div className="py-4 flex flex-wrap justify-center gap-x-4 gap-y-3">
        {user?.skill_list.map((skill, i) => (
          <SkillItem key={i} skill_name={skill.skill_name} id={skill.id} />
        ))}
        {user?.skill_list.length === 0 && (
          <>
            <span>Tutaj wpisz swoje umiejętności</span>
          </>
        )}
        <SkillItemAddInput />
      </div>
    </div>
  );
}
