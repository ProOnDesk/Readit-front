import { PulseLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="w-full h-[24px] flex justify-center items-center">
      <PulseLoader size={12} color="#ffffff" />
    </div>
  );
}
