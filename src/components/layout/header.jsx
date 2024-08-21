"use client";

// React
import React from "react";

// NextUI
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

// Next.js
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["I campi", "Contatti", "FAQ"];

  return (
    <Navbar
      maxWidth="full"
      className="bg-myPrimary py-1 text-white [&_*]:text-xl [&_*]:md:text-2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <Image
          src="/assets/imgs/logo/logo.png"
          alt="Campo Click logo"
          width={50}
          height={50}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Campo Click</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-inherit">
            I campi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" className="text-inherit">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-inherit">
            Contatti
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Link href="#" className="text-inherit">
            Prenota
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-inherit md:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full text-inherit"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
