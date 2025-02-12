import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import SimpleToggle from "./registry/Components/ToggleSwitches/SimpleToggle";
import GearToggle from "./registry/Components/ToggleSwitches/GearToggle";
import LoveToggle from "./registry/Components/ToggleSwitches/LoveToggle";
import DownloadToggle from "./registry/Components/ToggleSwitches/DownloadToggle";
import EmojiToggle from "./registry/Components/ToggleSwitches/EmojiToggle";
import SwitchToggle from "./registry/Components/ToggleSwitches/SwitchToggle";
import ThemeToggle from "./registry/Components/ToggleSwitches/ThemeToggle";
import AirplaneToggle from "./registry/Components/ToggleSwitches/AirplaneToggle";
import AiToggle from "./registry/Components/ToggleSwitches/AiToggle";
import JoystickToggle from "./registry/Components/ToggleSwitches/JoystickToggle";
const Navbar = lazy(() => import("./components/core/Navbar"));


const App3: React.FC = () => {
  return (
    <ThemeProvider>
      {/* Suspense to handle the loading state for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <SimpleToggle />
        <GearToggle />
        <LoveToggle />
        <DownloadToggle />
        <EmojiToggle/>
        <SwitchToggle/>
        <ThemeToggle/>
        <AirplaneToggle/>
        <AiToggle/>
        <JoystickToggle/>
      </Suspense>
    </ThemeProvider>
  );
};

export default App3;
