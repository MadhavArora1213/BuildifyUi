import React, { useRef, useState, lazy, Suspense, useMemo } from "react";
import { useTheme } from "../lib/theme/ThemeContext";
import { useClickOutside } from "../lib/hooks/useClickOutside";
import { themes } from "../lib/theme/ThemeContext";

// Lazy load icons
const ChevronDown = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.ChevronDown }))
);
const Check = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Check }))
);

export const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, availableThemes } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  // Memoize theme values to prevent unnecessary re-renders
  const currentTheme = useMemo(() => theme, [theme]);
  const themeList = useMemo(() => availableThemes, [availableThemes]);

  return (
    <div ref={dropdownRef} className="relative">
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200"
        style={{
          backgroundColor: `${currentTheme.colors.primary}20`,
          color: currentTheme.colors.text,
        }}
      >
        <span>Theme</span>
        <Suspense fallback={<div className="w-4 h-4 ">⏳</div>}>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Suspense>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg py-1 z-50 max-h-60 overflow-y-auto"
          style={{ backgroundColor: currentTheme.colors.background }}
        >
          {themeList.map((themeName) => {
            const isActive = currentTheme.name === themeName;

            return (
              // biome-ignore lint/a11y/useButtonType: <explanation>
              <button
                key={themeName}
                onClick={() => {
                  setTheme(themeName);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-2 text-left transition-colors duration-200 ${
                  isActive ? "bg-opacity-20" : "hover:bg-opacity-10"
                }`}
                style={{
                  backgroundColor: isActive
                    ? `${currentTheme.colors.primary}30`
                    : "transparent",
                  color: currentTheme.colors.text,
                }}
              >
                <div className="flex items-center space-x-3">
                  <span className="capitalize">{themeName}</span>
                  {isActive && (
                    <Suspense
                      fallback={<div className="w-4 h-4 ">✔</div>}
                    >
                      <Check size={16} />
                    </Suspense>
                  )}
                </div>
                <div className="flex space-x-1">
                  {themes[themeName]?.palette?.map((color, index) => (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
