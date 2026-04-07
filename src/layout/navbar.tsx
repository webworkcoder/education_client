"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const menuData: Record<string, { label: string; href: string }[]> = {
  Courses: [{ label: "MBBS Abroad", href: "#/courses" }],
  Countries: [
    { label: "Russia", href: "/countries/russia" },
    { label: "China", href: "/countries/china" },
  ],
  Universities: [
    { label: "Moscow State University", href: "/universities/msu" },
  ],
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "#", hasMenu: true },
  { name: "Countries", href: "#", hasMenu: true },
  { name: "Universities", href: "#", hasMenu: true },
  { name: "Contact Us", href: "/contact" },
];


function HoverPopover({ label, href }: any) {
  const [open, setOpen] = useState(false);
  const timer = useRef<any>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <li
          onMouseEnter={() => {
            if (timer.current) clearTimeout(timer.current);
            setOpen(true);
          }}
          onMouseLeave={() => {
            timer.current = setTimeout(() => setOpen(false), 100);
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
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-48 p-0"
      >
        {menuData[label]?.map((item) => (
          <Link key={item.href} href={item.href} className="block px-4 py-2">
            {item.label}
          </Link>
        ))}
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
          <img src="/logo.png" className="h-8" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8">
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
            className="md:hidden bg-gray-100 border rounded-md p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          {/* BUTTON */}
          <Link
            href="/register"
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
