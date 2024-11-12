import Spinner from "./_components/ui/Spinner";

function Loading() {
  return (
    <div className="w-full md:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)] flex justify-center items-center">
      <Spinner size="big" color="green" />
    </div>
  );
}

export default Loading;
