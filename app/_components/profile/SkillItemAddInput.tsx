import { useAddSkillItem } from "@/app/_hooks/useAddSkillItem";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

export default function SkillItemAddInput() {
  const [skill, setSkill] = useState("");
  const { addSkillItemHookFn, isLoading } = useAddSkillItem();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (skill === "") return;

        if (skill.length > 30) {
          toast.error("Umiejętność nie może być dłuższa niż 30 znaków.");
          return;
        }

        addSkillItemHookFn({ skill_name: skill });
        toast.success("Dodano umiejętność: " + skill);
        setSkill("");
      }}
      className="flex justify-center items-center gap-2 border border-stone-300 rounded-md px-3 py-2"
    >
      <input
        type="text"
        id="skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="outline-none border-none"
        placeholder="Dodaj umiejętność"
      />
      <button
        type="submit"
        className="hover:bg-whiteSecond text-mainGreen  transition-colors duration-300 rounded-md p-1"
      >
        <FaCheck />
      </button>
    </form>
  );
}
