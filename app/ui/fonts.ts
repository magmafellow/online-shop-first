import { Josefin_Sans } from "next/font/google";
import { Dosis } from "next/font/google";

export const josefinSans = Josefin_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const dosis = Dosis({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
});
