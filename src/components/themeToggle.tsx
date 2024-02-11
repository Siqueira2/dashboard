"use client";

import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  };

  return (
    <div>
      <Switch checked={theme === "light"} onCheckedChange={handleClick} />
    </div>
  );
};
