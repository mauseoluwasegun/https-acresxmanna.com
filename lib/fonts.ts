import {
  Playfair_Display,
  DM_Sans,
  DM_Mono,
} from "next/font/google";

export const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const fontSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
