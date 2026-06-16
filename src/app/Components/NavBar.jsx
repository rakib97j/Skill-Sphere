"use client";
import { useState } from "react";
import { Link } from "@heroui/react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link href="/"> SkillSphere</Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link
              className={`text-sm font-medium ${pathname === "/" ? "text-emerald-500 font-bold" : "text-foreground/70"}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-medium ${pathname === "/courses" ? "text-emerald-500 font-bold" : "text-foreground/70"}`}
              href="courses"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-medium ${pathname === "/myProfile" ? "text-emerald-500 font-bold" : "text-foreground/70"}`}
              href="myProfile"
            >
              My profile
            </Link>
          </li>
        </ul>
        {/* Profile and theme  */}
        <div></div>
      </header>
      {isMenuOpen && (
        <div className="border-t   md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="home">Home</Link>
            </li>
            <li>
              <Link href="courses">Courses</Link>
            </li>
            <li>
              <Link href="myProfile">My profile</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
