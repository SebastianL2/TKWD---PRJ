import { MainNavItem, } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]

}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contac Us",
      href: "/contact",
    },

  ],

}