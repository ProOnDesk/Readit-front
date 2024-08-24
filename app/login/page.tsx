import React from "react";
import LoginForm from "../_components/account/LoginForm";

export default function Page() {
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-full flex justify-center items-center px-4 sm400:px-10 sm500:px-20 sm:bg-whiteSecond">
      <LoginForm />
    </div>
  );
}
