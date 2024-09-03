import React from "react";
import AuthProvider from "../_components/AuthProvider";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AuthProvider />
      {children}
    </div>
  );
}
