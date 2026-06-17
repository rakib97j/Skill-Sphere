"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; 
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
