import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Ha Lim Chung — Business Analytics",
  description:
    "Ha Lim Chung (Jack) — Business Analytics graduate student at The George Washington University. Focused on data analytics, machine learning, and forecasting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" data-accent="navy" data-density="default" data-display-font="sans" data-show-stats="true">
      <body className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
