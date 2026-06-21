"use client";
import { useState } from "react";
import { Avatar, Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import {  LogOut } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { data ,isPending} = useSession()

  if(isPending){
    return (
      <div>
        <not-found></not-found>
      </div>
    );
  }

  const user =data?.user;


  return (
    <nav className="sticky top-0 z-40 w-full border-b-2 bg-background border-border  backdrop-blur-xl  ">
      <header className="flex h-16 items-center justify-between px-8">
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
          <Link href="/" className="text-3xl font-black">
            Skill <span className="text-primary">Sphere</span>{" "}
          </Link>
        </div>
        <ul className="hidden  items-center gap-4 md:flex">
          <li>
            <Link
              className={`text-sm font-bold ${pathname === "/" ? "text-primary font-bold" : "text-foreground/70"}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-bold ${pathname === "/courses" ? "text-primary font-bold" : "text-foreground/70"}`}
              href="/courses"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-bold ${pathname === "/myProfile" ? "text-primary font-bold" : "text-foreground/70"}`}
              href="/myProfile"
            >
              My profile
            </Link>
          </li>
        </ul>
        {/* Profile and theme  */}
        <div className="flex items-center gap-2">
          <div className="">
            {user ? (
              <div className="flex">
                {" "}
                <div>
                  <h1>welcome {user.name}</h1>
                  <h1>{user.email}</h1>
                </div>
                <Link href="/myProfile">
                  <Avatar>
                    <Avatar.Image src={user.image || ""} alt={user.name} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                  </Avatar>
                </Link>
                <button variant="danger" onClick={() => signOut()} >
                  <LogOut />
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">Login</Link>
              </>
            )}
          </div>

          <ThemeToggle />
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t   md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link
                className={`text-sm font-bold ${pathname === "/" ? "text-primary font-bold" : "text-foreground/70"}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-bold ${pathname === "/courses" ? "text-primary font-bold" : "text-foreground/70"}`}
                href="/courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-bold ${pathname === "/myProfile" ? "text-primary font-bold" : "text-foreground/70"}`}
                href="/myProfile"
              >
                My profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
