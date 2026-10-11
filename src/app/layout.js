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
  title: "Counseling in Newbury Park, CA",
  description: "Online & in-person counseling in Newbury Park, CA.",
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