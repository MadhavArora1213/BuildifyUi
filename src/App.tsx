import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path

// Lazy load components
const HelloWorld = lazy(() => import("./components/HelloWorld"));
const Navbar = lazy(() => import("./components/Navbar"));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      {/* Suspense to handle the loading state for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div
          style={{
            minHeight: "100vh",
            padding: "2rem",
            backgroundColor: "var(--background)",
          }}
        >
          <HelloWorld />
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
