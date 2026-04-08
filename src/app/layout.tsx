import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeHacks | Industrial Hackathon Platform",
  description:
    "PrimeHacks helps teams launch, manage, and scale modern hackathon experiences with a polished production-grade workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Script id="primehacks-theme" strategy="beforeInteractive">
          {`
            try {
              const storedTheme = window.localStorage.getItem("primehacks-theme");
              const theme = storedTheme === "light" ? "light" : "dark";
              const root = document.documentElement;
              root.classList.toggle("dark", theme === "dark");
              root.dataset.theme = theme;
            } catch (error) {
              document.documentElement.classList.add("dark");
              document.documentElement.dataset.theme = "dark";
            }
          `}
        </Script>
        <Toaster position="top-right" reverseOrder={false} />
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
