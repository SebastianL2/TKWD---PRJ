import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { docsConfig } from "@/config/docs";

const NAV_MENU = ["Home", "About Us", "Contact Us"];

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography
       placeholder={undefined}
        as="a"
        href="#"
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}
interface NavbarProps {
  scrolling: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolling }) => {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(scrolling);
  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
     placeholder={undefined}
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 "
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
         placeholder={undefined}
          as="a"
          href="/"
          target="_blank"
          className="text-sm font-bold"
          color={isScrolling ? "blue-gray" : "white"}
        >
          <Link href={'https://play.google.com/store/apps/details?id=com.duhnnae.martialartscombat&pcampaignid=web_share'}>
          <Button placeholder={undefined} onClick={()=>console.log("#sfa")} variant="text" color={isScrolling ? "gray" : "white"}>
           APK TKWD
          </Button>
          </Link>
        </Typography>
        <ul
          className={`ml-8 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {docsConfig.mainNav.map((group,index) => (
            <NavItem key={index}>
              <Link href={group.href}>
              {group.title}
              </Link>
              </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href={'/login'}>
          <Button placeholder={undefined} onClick={()=>console.log("#sfa")} variant="text" color={isScrolling ? "gray" : "white"}>
            Log in
          </Button>
          </Link>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button  placeholder={undefined} color={isScrolling ? "gray" : "white"}>blocks</Button>
          </a>
        </div>
        <IconButton
         placeholder={undefined}
          variant="text"
          onClick={handleOpen}
          color={isScrolling ? "gray" : "white"}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Link href={'/login'}>
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            </Link>
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((name) => (
              <NavItem key={name}>{name}</NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <Button placeholder={undefined} variant="text">Log in</Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button  placeholder={undefined} color="gray">blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}


