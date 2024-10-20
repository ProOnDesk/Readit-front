import RegisterForm from "../_components/account/RegisterForm";
import FooterHomepage from "../_components/homepage/FooterHomepage";

export default function Page() {
  return (
    <>
      <div className="md:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)] w-full flex justify-center items-center px-4 sm400:px-10 sm500:px-20 sm:bg-whiteSecond">
        <RegisterForm />
      </div>
      <FooterHomepage colorVariant="dark" />
    </>
  );
}
