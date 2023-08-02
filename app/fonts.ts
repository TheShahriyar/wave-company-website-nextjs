import { Kaushan_Script, Open_Sans, Poppins } from "next/font/google";

export const kausan = Kaushan_Script({
  weight: "400",
  variable: "--kausan",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins",
});
export const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--open-sans",
});
