import ProfileContent from "@/app/_components/profile/ProfileContent";

export const metadata = {
  title: "Edytuj profil | ReadIt",
  description: "Edytuj swój profil na ReadIt",
};

export default function Page() {
  return (
    <div className="md900:bg-whiteSecond lg1200:pb-20">
      <ProfileContent />
    </div>
  );
}
