import type { Metadata } from "next";
import { Jost } from "next/font/google";
import AppProvider from "./_components/AppProvider";
import Navigation from "./_components/nav/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <AppProvider>
          <div
            id="app"
            className="relative font-display flex flex-col items-center justify-center w-full h-full overflow-x-hidden text-black"
          >
            <Navigation />
            <div className="pt-16 md:pt-20 w-full">{children}</div>
          </div>
          <Analytics />
          <SpeedInsights />
        </AppProvider>
      </body>
    </html>
  );
}
