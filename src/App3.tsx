import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import SimpleToggle from "./registry/Components/ToggleSwitches/SimpleToggle";
import GearToggle from "./registry/Components/ToggleSwitches/GearToggle";
import LoveToggle from "./registry/Components/ToggleSwitches/LoveToggle";
const Navbar = lazy(() => import("./components/core/Navbar"));


const App3: React.FC = () => {
  return (
    <ThemeProvider>
      {/* Suspense to handle the loading state for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      <SimpleToggle/>
      <GearToggle/>
      <LoveToggle/>
      </Suspense>
    </ThemeProvider>
  );
};

export default App3;
