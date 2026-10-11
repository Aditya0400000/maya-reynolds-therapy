import { Mulish, Cormorant_Garamond, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const body = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body-src",
});

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-heading-src",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-src",
});

export const metadata = {
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA offering anxiety, panic, trauma, EMDR and burnout therapy for adults, in person and via telehealth across California.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${heading.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}