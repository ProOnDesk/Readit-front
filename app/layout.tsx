import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import AppProvider from "./_components/AppProvider";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ReadIt | Just Read",
  description: "Place where u can read",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <AppProvider> */}
        <body className={jost.className}>{children}</body>
      {/* </AppProvider> */}
    </html>
  );
}
