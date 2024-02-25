"use client";

import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  };

  return (
    <div className="relative w-full h-8 flex justify-center items-center">
      <Switch
        id="theme-switch"
        onCheckedChange={handleClick}
        className="absolute"
      />

      <Label htmlFor="theme-switch" className="cursor-pointer absolute">
        <>{theme === "light" ? <Sun color="#f59e0b" /> : <MoonStar />}</>
      </Label>
    </div>
  );
};
