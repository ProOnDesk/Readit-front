import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import AppProvider from "./_components/AppProvider";
import Navigation from "./_components/nav/Navigation";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ReadIt | Po prostu czytaj",
  description:
    "ReadIt jest platformą do publikowania i czytania artykułów. Dołącz do naszej społeczności i dziel się swoją wiedzą z innymi. Czytaj, komentuj i oceniaj artykuły innych użytkowników. Zyskuj uznanie i śledź swoją popularność na platformie. Zarejestruj się już dziś! ",
  openGraph: {
    images: [
      {
        url: String("/ReadIt-logo.png"),
        width: 800,
        height: 600,
        alt: "ReadIt logo",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

// const theme = createTheme({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <AppProvider>
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
        </AppProvider>
      </body>
    </html>
  );
}
