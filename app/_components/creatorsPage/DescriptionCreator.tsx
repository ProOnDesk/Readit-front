import { User } from "@/app/_redux/features/authApiSlice";

interface DescriptionProps {
  user: User | undefined;
}

export default function DescriptionCreator({ user }: DescriptionProps) {
  return (
    <>
      {user?.description.length !== 0 && (
        <div className="px-8 mt-10 sm:px-12 lg:px-20 lg1200:px-12 max-w-[1200px] mx-auto bg-white md900:mt-0 md900:py-8 lg1200:py-10 lg1200:mt-4 lg1200:rounded-2xl lg1200:shadow-lg">
          <h4 className="text-2xl font-medium">O twórcy</h4>
          <div className="py-4 text-left flex gap-2 group">
            <p>{user?.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
