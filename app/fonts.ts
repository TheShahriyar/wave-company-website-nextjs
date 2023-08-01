import { Kaushan_Script, Poppins } from "next/font/google";

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
