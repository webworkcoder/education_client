"use client";

import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaUserDoctor } from "react-icons/fa6";

const menuData: Record<
  string,
  { label: string; href: string; icon?: React.ReactNode }[]
> = {
  Courses: [{ label: "MBBS", href: "/#mbbs", icon: <FaUserDoctor /> }],
  Countries: [
    {
      label: "Russia",
      href: "/countries/russia",
      icon: <img src="/russialogo.png" alt="Russia" className="w-6 h-6 object-contain border rounded-full" />,
    },
    {
      label: "China",
      href: "/countries/china",
      icon: <img src="/chinalogo.png" alt="China" className="w-6 h-6 object-contain border rounded-full" />,
    },
    {
      label: "Uzbekistan",
      href: "/countries/uzbekistan",
      icon: <img src="/Uzbekistanlogo.png" alt="Uzbekistan" className="w-6 h-6 object-contain border rounded-full" />,
    },
  ],
  Universities: [
    {
      label: "MBBS University in Russia",
      href: "/universities/russiauniversities",
      icon: <img src="/russialogo.png" alt="MBBS University in Russia" className="w-6 h-6 object-cover  border rounded-full" />,
    },
  ],
};

const popoverWidths: Record<string, string> = {
  Courses: "w-40",
  Countries: "w-56",
  Universities: "w-72",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Courses", href: "#", hasMenu: true },
  { name: "Countries", href: "#", hasMenu: true },
  { name: "Universities", href: "#", hasMenu: true },
  { name: "Contact Us", href: "/contact" },
];

function HoverPopover({ label, href }: any) {
  const [open, setOpen] = useState(false);
  const timer = useRef<any>(null);
  const pathname = usePathname();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <li
          onMouseEnter={() => {
            if (timer.current) clearTimeout(timer.current);
            setOpen(true);
          }}
          onMouseLeave={() => {
            timer.current = setTimeout(() => setOpen(false), 150);
          }}
          className="list-none"
        >
          <Link href={href} className="flex items-center gap-1">
            {label}
            <ChevronDown className={`w-4 h-4 ${open ? "rotate-180" : ""}`} />
          </Link>
        </li>
      </PopoverTrigger>

      <PopoverContent
        onMouseEnter={() => {
          if (timer.current) clearTimeout(timer.current);
          setOpen(true);
        }}
        onMouseLeave={() => {
          timer.current = setTimeout(() => setOpen(false), 150);
        }}
        className={`${popoverWidths[label] || "w-48"} p-0 gap-0 rounded-none`}
        side="bottom" 
        align="start" 
        sideOffset={6}
      >
        {menuData[label]?.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 gap-2 py-1.5 hover:bg-[#667cb0] hover:text-white ${
                isActive ? "bg-[#667cb0] text-white font-semibold" : ""
              }`}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm">
      {/* TOP ROW */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* LOGO */}
        <Link href="/">
          {/* <img src="/logo.png" className="h-8" /> */}
          <p className="font-bold text-blue-700">Doctor Study Web.</p>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex flex-wrap gap-3 md:gap-5 lg:gap-8 text-xs md:text-sm lg:text-base">
          {navLinks.map((link) =>
            link.hasMenu ? (
              <HoverPopover key={link.name} label={link.name} href="#" />
            ) : (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ),
          )}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden bg-gray-100 border rounded-md p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          {/* BUTTON */}
          <Link
            href="/#apply"
            className="bg-[#405b9c] text-white px-4 py-2 rounded-md text-sm"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div
                onClick={() =>
                  link.hasMenu
                    ? setOpenDropdown(
                        openDropdown === link.name ? null : link.name,
                      )
                    : setMenuOpen(false)
                }
                className={`flex justify-between px-4 py-3 ${
                  link.hasMenu ? "bg-[#6f84b3] text-white" : "bg-gray-100"
                }`}
              >
                {link.name}
                {link.hasMenu && <ChevronDown />}
              </div>

              {openDropdown === link.name && (
                <div className="bg-white">
                  {menuData[link.name]?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
