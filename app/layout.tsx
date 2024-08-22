import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "@mantine/nprogress/styles.css";
import "@mantine/core/styles.css";
import AppProvider from "./_components/AppProvider";
import Navigation from "./_components/nav/Navigation";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { RouterTransition } from "./_components/nav/RouterTransition";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ReadIt | Just Read",
  description: "Place where u can read",
};

// const theme = createTheme({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <AppProvider> */}
      <body className={jost.className}>
        <MantineProvider>
          {/* <RouterTransition /> */}
          <div
            id="app"
            className="relative font-display flex flex-col items-center justify-center w-full h-full overflow-x-hidden"
          >
            <Navigation />
            <div className="pt-16 md:pt-20 w-full">
              {children}

              {/* do usuniecia */}
              {/* <div className="h-screen"></div> */}
            </div>
          </div>
        </MantineProvider>
      </body>
      {/* </AppProvider> */}
    </html>
  );
}
