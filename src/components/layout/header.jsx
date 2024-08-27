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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

// Next.js
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Assets
import basketballIcon from "../../../public/assets/imgs/icons/basketball.png";
import footballIcon from "../../../public/assets/imgs/icons/football.png";
import tennisIcon from "../../../public/assets/imgs/icons/tennis.png";
import padelIcon from "../../../public/assets/imgs/icons/padel.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const goTo = (path) => () => {
    router.push(path);
  };

  const menuItems = [
    {
      label: "Campi da Tennis",
      href: "/campi/tennis",
    },
    {
      label: "Campi da Padel",
      href: "/campi/padel",
    },
    {
      label: "Campi da Basket",
      href: "/campi/basket",
    },
    {
      label: "Campi da Calcio",
      href: "/campi/calcio",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ];

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
          <Link className="font-bold text-inherit" href="/">
            Campo Click
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                endContent={
                  <svg
                    fill="none"
                    height={24}
                    viewBox="0 0 24 24"
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                      fill="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                    />
                  </svg>
                }
                radius="sm"
                variant="dark"
              >
                I campi
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            color="primary"
            aria-label="I campi"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              onPress={goTo("/campi/tennis")}
              startContent={
                <Image
                  src={tennisIcon}
                  width={40}
                  height={40}
                  alt="Tennis icon"
                />
              }
            >
              Tennis
            </DropdownItem>
            <DropdownItem
              key="autoscaling"
              onPress={goTo("/campi/padel")}
              startContent={
                <Image
                  src={padelIcon}
                  width={40}
                  height={40}
                  alt="Padel icon"
                />
              }
            >
              Padel
            </DropdownItem>
            <DropdownItem
              key="autoscaling"
              onPress={goTo("/campi/basket")}
              startContent={
                <Image
                  src={basketballIcon}
                  width={40}
                  height={40}
                  alt="Basketball icon"
                />
              }
            >
              Basket
            </DropdownItem>
            <DropdownItem
              key="autoscaling"
              onPress={goTo("/campi/calcio")}
              startContent={
                <Image
                  src={footballIcon}
                  width={40}
                  height={40}
                  alt="Football icon"
                />
              }
            >
              Calcio
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="#" aria-current="page" className="text-inherit">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-inherit md:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="gap-8 bg-myTertiary/60 pt-6 font-bold text-myQuaternary">
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
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
