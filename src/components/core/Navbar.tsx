import { lazy, Suspense, useMemo } from "react";
import { useTheme } from "../../lib/theme/ThemeContext";

const MenuIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Menu }))
);
const GithubIcon = lazy(() =>
  import("lucide-react").then((module) => ({ default: module.Github }))
);

import { ThemeDropdown } from "./ThemeDropdown";
import { SearchBar } from "./SearchBar";

const Navbar = () => {
  const { theme } = useTheme();

  const themeStyles = useMemo(
    () => ({
      borderColor: `${theme.colors.text}20`,
      primaryBg: `${theme.colors.primary}10`,
      textColor: theme.colors.text,
      accentBg: theme.colors.accent,
      logoBg: theme.colors.background, // 🔥 Dynamic Logo Background
    }),
    [theme]
  );

  return (
    <nav
      className="border-b transition-colors duration-200"
      style={{ borderColor: themeStyles.borderColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section */}
          <div className="flex items-center">
            <Suspense fallback={<div className="w-6 h-6">☰</div>}>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                className="p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200"
                style={{ backgroundColor: themeStyles.primaryBg }}
              >
                <MenuIcon size={24} style={{ color: themeStyles.textColor }} />
              </button>
            </Suspense>
            <div className="flex items-center  space-x-3 ml-2">
              {/* SVG Logo with Dynamic Background */}
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                width="80"
                height="80"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  backgroundColor: themeStyles.logoBg,
                  borderRadius: "8px",
                }}
              >
                <defs>
                  <linearGradient
                    id="primaryGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={theme.colors.primary} />
                    <stop offset="100%" stopColor={theme.colors.secondary} />
                  </linearGradient>

                  <linearGradient
                    id="accentGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor={theme.colors.accent} />
                    <stop offset="100%" stopColor={theme.colors.primary} />
                  </linearGradient>
                </defs>

                {/* Logo Content */}
                <g transform="translate(10, 10)">
                  <g transform="translate(0, 2)">
                    <rect
                      x="0"
                      y="0"
                      width="25"
                      height="25"
                      rx="4"
                      fill="url(#primaryGradient)"
                    />
                    <rect
                      x="5"
                      y="5"
                      width="15"
                      height="3"
                      rx="1.5"
                      fill="url(#accentGradient)"
                    />
                    <rect
                      x="5"
                      y="11"
                      width="10"
                      height="3"
                      rx="1.5"
                      fill={theme.colors.text}
                    />
                    <rect
                      x="5"
                      y="17"
                      width="12.5"
                      height="3"
                      rx="1.5"
                      fill={theme.colors.text}
                    />
                    <circle
                      cx="20"
                      cy="12.5"
                      r="1.5"
                      fill={theme.colors.accent}
                    />
                  </g>
                </g>
              </svg>

              <div className="flex flex-col">
                <span
                  className="text-xl font-bold"
                  style={{ color: themeStyles.textColor }}
                >
                  Buildify{" "}
                  <span style={{ color: theme.colors.primary }}>UI</span>
                </span>
                <span className="text-sm text-gray-500">
                  The Art of Modular Design
                </span>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <a
              // biome-ignore lint/a11y/useValidAnchor: <explanation>
              href="#"
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: themeStyles.textColor }}
            >
              Components
            </a>
            <div className="flex items-center space-x-2">
              <ThemeDropdown />
              <Suspense fallback={<div className="w-5 h-5">🔗</div>}>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200"
                  style={{ backgroundColor: themeStyles.primaryBg }}
                >
                  <GithubIcon
                    size={20}
                    style={{ color: themeStyles.textColor }}
                  />
                </button>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
