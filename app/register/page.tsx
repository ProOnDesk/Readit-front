import RegisterForm from "../_components/account/RegisterForm";

export default function Page() {
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-full flex justify-center items-center px-4">
      <RegisterForm />
    </div>
  );
}
