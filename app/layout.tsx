import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import Hero from "@/components/hero";
import StarsCanvas from "@/components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaustubh Tiwari | Personal Portfolio",
  description: "Kaustubh is an entry level software developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-[#030014] text-white text-opacity-90`}
        suppressHydrationWarning
      >
        <ActiveSectionContextProvider>
          <Header />
          <div className="-z-10 h-[850px] absolute top-8 left-0 right-0">
            <Hero />
          </div>
          <StarsCanvas />
          {children}
          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
