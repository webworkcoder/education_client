/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronDown, Send, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserDoctor } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Types
type MenuItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const menuData: Record<string, MenuItem[]> = {
  Courses: [
    {
      label: "MBBS",
      href: "/#mbbs",
      icon: <FaUserDoctor className="text-blue-600" />,
    },
  ],
  Countries: [
    {
      label: "Kyrzasthan ",
      href: "/countries/kyrzasthan",
      icon: (
        <img
          src="/kyrgyzflag.png"
          alt=""
          className="w-5 h-5 rounded-full border object-cover"
        />
      ),
    },
    {
      label: "Uzbekistan",
      href: "/countries/uzbekistan",
      icon: (
        <img
          src="/Uzbekistanlogo.png"
          alt=""
          className="w-5 h-5 rounded-full border object-cover"
        />
      ),
    },
  ],
  Universities: [
    {
      label: "Kyrzasthan Universities",
      href: "/universities/kyrzasthanuniversities",
      icon: (
        <img
          src="/kyrgyzflag.png"
          alt=""
          className="w-5 h-5 rounded-full border object-cover"
        />
      ),
    },
    {
      label: "Uzbekistan Universities",
      href: "/universities/uzbekistanuniversities",
      icon: (
        <img
          src="/uzbekistanlogo.png"
          alt=""
          className="w-5 h-5 rounded-full border object-cover"
        />
      ),
    },
  ],
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Courses", href: "#", hasMenu: true },
  { name: "Countries", href: "#", hasMenu: true },
  { name: "Universities", href: "#", hasMenu: true },
  { name: "Contact Us", href: "/contact" },
];

// --- DESKTOP HOVER POPOVER ---
function HoverPopover({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <li
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="list-none outline-none"
        >
          <button
            className={`flex items-center gap-1 font-medium transition-colors hover:text-[#1e4e96] ${open ? "text-[#1e4e96]" : "text-gray-700"}`}
          >
            {label}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </li>
      </PopoverTrigger>

      <PopoverContent
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="w-56 p-0 rounded-none bg-white shadow-xl border-slate-100"
        sideOffset={10}
        align="start"
      >
        {menuData[label]?.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2  transition-all ${
                isActive
                  ? "bg-[#1e4e96] text-white"
                  : "hover:bg-slate-200 text-gray-600"
              }`}
            >
              <span className="shrink-0">{item.icon}</span>
              <span className="text-sm font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}

// --- MAIN NAVBAR ---
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleMobileMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* LOGO */}
        <Link
          href="/"
          className="flex-shrink-0 transition-transform active:scale-95"
        >
          <img
            src="/eLogo.png"
            alt="Topson Education"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasMenu ? (
                <HoverPopover key={link.name} label={link.name} />
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors hover:text-[#1e4e96] ${pathname === link.href ? "text-[#1e4e96]" : "text-gray-700"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <Link
            href="/#apply"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#1e4e96] to-[#2d68b3] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-900/20 active:scale-95"
          >
            Register Now
            <Send size={14} className="rotate-45" />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2  text-gray-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <RiMenu2Fill size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col py-2 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div
                  onClick={() =>
                    link.hasMenu
                      ? setOpenDropdown(
                          openDropdown === link.name ? null : link.name,
                        )
                      : setMenuOpen(false)
                  }
                  className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-colors ${
                    link.hasMenu ? "bg-slate-50/50" : "hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`font-bold ${link.hasMenu ? "text-[#0b1f4d]" : "text-gray-800"}`}
                  >
                    {link.hasMenu ? (
                      link.name
                    ) : (
                      <Link href={link.href}>{link.name}</Link>
                    )}
                  </span>
                  {link.hasMenu && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openDropdown === link.name ? "rotate-180 text-[#1e4e96]" : "text-gray-400"}`}
                    />
                  )}
                </div>

                {/* MOBILE DROPDOWN CONTENT */}
                {link.hasMenu && openDropdown === link.name && (
                  <div className="bg-slate-50/30 px-4 pb-2">
                    {menuData[link.name]?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-4 px-6 py-3 hover:bg-white transition-all"
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
                          {item.icon}
                        </span>
                        <span className="text-gray-700 font-normal text-sm">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="p-6 mt-2">
              <Link
                href="/#apply"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#1e4e96] text-white w-full py-3.5 shadow-md rounded-full font-bold"
              >
                Register Now <Send size={16} className="rotate-45" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
