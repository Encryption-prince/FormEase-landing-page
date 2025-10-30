"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

function ThemeInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This runs only on the client side after hydration
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light"
      enableSystem={false}
      storageKey="theme"
    >
      <ThemeInitializer>
        {children}
      </ThemeInitializer>
    </NextThemesProvider>
  );
}
