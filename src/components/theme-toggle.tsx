"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonStar, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "portfolio-theme";

function subscribe(onStoreChange: () => void): () => void {
  const handler = (): void => {
    onStoreChange();
  };
  window.addEventListener("storage", handler);
  window.addEventListener(THEME_CHANGE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(THEME_CHANGE_EVENT, handler);
  };
}

function getSnapshot(): Theme {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle(): React.JSX.Element {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme(): void {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <Button variant="outline" size="sm" aria-label="Toggle theme" onClick={toggleTheme}>
      {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <MoonStar className="mr-2 h-4 w-4" />}
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
}
