"use client";
import { useState } from "react";
import { Avatar, Button, Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import {  LogIn, LogOut } from "lucide-react";
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
        <div className="flex items-center gap-3">
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
        <div className="flex  items-center gap-2">
          <div className="">
            {user ? (
              <div className="md:flex">
                {" "}
                <div className=" ml-2 max-w-[140px] text-right ">
                  <h1 className="text-primary text-[10px] md:text-xs font-medium hidden md:block">
                    Welcome{" "}
                    <span className="text-foreground text-xs md:text-sm font-semibold truncate max-w-[150px]">
                      {user.name}
                    </span>{" "}
                  </h1>
                  <h1 className=" hidden md:block text-[10px] md:text-xs text-right text-foreground/60 truncate text-right">
                    {user.email}
                  </h1>
                </div>
                <Link href="/myProfile" className="  ml-4">
                  <Avatar className="mt-1">
                    <Avatar.Image src={user.image || ""} alt={user.name} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                  </Avatar>
                </Link>
                <button
                  className="ml-5 hidden md:block   "
                  variant="danger"
                  onClick={() => signOut()}
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    color="primary"
                    className="bg-primary/70 hover:opacity-85"
                  >
                    <LogIn />
                  </Button>
                </Link>
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
