import React from "react";
import AuthProvider from "../_components/AuthProvider";
import FooterHomepage from "../_components/homepage/FooterHomepage";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AuthProvider />
      <div className="md:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)]">
        {children}
      </div>
      <FooterHomepage colorVariant="dark" />
    </div>
  );
}
