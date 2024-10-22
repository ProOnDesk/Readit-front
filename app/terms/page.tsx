import React from "react";
import FooterHomepage from "../_components/homepage/FooterHomepage";

export default function Page() {
  return (
    <>
      <div className="md:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)] w-full flex justify-center items-start  lg1200:bg-whiteSecond">
        <div className="px-8 w-full h-full mt-10 sm:px-12 lg:px-20 lg1200:px-12 max-w-[1200px] mx-auto bg-white md900:mt-12 md900:py-8 lg1200:py-10 lg1200:mt-12 lg1200:rounded-2xl lg1200:shadow-lg">
          <h4 className="text-2xl font-medium">Regulamin Readit</h4>
          <div className="py-4 text-left flex gap-2 group">
            <p>Regulamin kiedyś zostanie napisany... </p>
          </div>
        </div>
      </div>
      <FooterHomepage colorVariant="dark" />
    </>
  );
}
