import localFonts from "next/font/local"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const jakartaSans = localFonts({
  src: [
    {
      path: "/jakartaSans/static/PlusJakartaSans-Regular.ttf",
      style: "normal",
      weight: "300"
    },
    {
      path: "/jakartaSans/static/PlusJakartaSans-Bold.ttf",
      style: "normal",
      weight: "700"
    },
    {
      path: "/jakartaSans/static/PlusJakartaSans-ExtraBold.ttf",
      style: "normal",
      weight: "800"
    },
  ]
})
