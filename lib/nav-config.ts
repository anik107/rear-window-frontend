import { NavConfig } from "@/types/nav";

export const navConfig: NavConfig = {
  brand: {
    topText: "rear",
    bottomText: "window",
    href: "/",
  },
  search: {
    placeholder: "Enter a property address, city, or ZIP code...",
  },
  links: [
    { label: "Pricing", href: "/pricing" },
  ],
  auth: {
    label: "Log in/Sign up",
    href: "/sign-up",
  },
};