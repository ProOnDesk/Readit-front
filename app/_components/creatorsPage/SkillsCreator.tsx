import { User } from "@/app/_redux/features/authApiSlice";

interface SkillsProps {
  user: User | undefined;
}

export default function SkillsCreator({ user }: SkillsProps) {
  return (
    <div className="px-8 mt-12 sm:px-12 lg:px-20 lg1200:px-12 max-w-[1200px] mx-auto bg-white md900:mt-0 md900:py-8 lg1200:py-10 lg1200:mt-4 lg1200:rounded-2xl lg1200:shadow-lg">
      <h4 className="text-2xl font-medium lg1200:mb-4">Umiejętności</h4>
      <div className="py-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
        {user?.skill_list.map((skill, i) => (
          <div
            className="py-2 px-3 border-stone-300 border rounded-md flex justify-center items-center gap-2"
            key={i}
          >
            <p>{skill.skill_name}</p>
          </div>
        ))}
        {user?.skill_list.length === 0 && (
          <span>Twórca nie zdradził swoich talentów</span>
        )}
      </div>
    </div>
  );
}
