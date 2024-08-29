import Spinner from "./_components/ui/Spinner";

function Loading() {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
      <Spinner size="big" />
    </div>
  );
}

export default Loading;
