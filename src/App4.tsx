import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import VehicleSelector from "./registry/Components/RadioButtons/VehicleSelector";

// Lazy load components

const Navbar = lazy(() => import("./components/core/Navbar"));

const App4: React.FC = () => {
  return (
    <ThemeProvider>
      {/* Suspense to handle the loading state for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
     <Navbar/>
     <VehicleSelector/>
      </Suspense>
    </ThemeProvider>
  );
};

export default App4;
