import { PulseLoader } from "react-spinners";

interface SpinnerProps {
  color?: "white" | "green";
  size?: "small" | "big";
}

export default function Spinner({
  color = "white",
  size = "small",
}: SpinnerProps) {
  const spinnerColor = color === "white" ? "#ffffff" : "#9ef01a";
  const spinnerSize = size === "small" ? 12 : 18;
  return (
    <div className="w-full h-[24px] flex justify-center items-center">
      <PulseLoader size={spinnerSize} color={spinnerColor} />
    </div>
  );
}
