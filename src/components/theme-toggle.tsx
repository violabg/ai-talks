"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themeOrder = ["light", "dark"] as const;
type Theme = (typeof themeOrder)[number];

const themeConfig: Record<Theme, { icon: typeof Sun; label: string }> = {
  light: { icon: Sun, label: "Chiaro" },
  dark: { icon: Moon, label: "Scuro" },
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = (mounted ? theme : "light") as Theme;
  const currentIndex = themeOrder.indexOf(currentTheme);
  const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];

  const { icon: Icon } = themeConfig[currentTheme] ?? themeConfig.light;
  const nextLabel = themeConfig[nextTheme].label;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Passa al tema ${nextLabel}`}
      title={`Tema attuale: ${themeConfig[currentTheme]?.label ?? "Sistema"} → ${nextLabel}`}
    >
      <Icon className="w-5 h-5" />
    </Button>
  );
}
