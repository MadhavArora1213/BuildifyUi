import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import VehicleSelector from "./registry/Components/RadioButtons/VehicleSelector";
import Star from "./registry/Components/RadioButtons/Star";
import AnimatedStar from "./registry/Components/RadioButtons/AnimatedStar";
import SwitchRadio from "./registry/Components/RadioButtons/SwitchRadio";
import PaymentSelector from "./registry/Components/RadioButtons/PaymentSelector";
import TabSelector from "./registry/Components/RadioButtons/TabSelector";
import ValueTabSelector from "./registry/Components/RadioButtons/ValueTabSelector";

// Lazy load components

const Navbar = lazy(() => import("./components/core/Navbar"));

const App4: React.FC = () => {
    return (
        <ThemeProvider>
            {/* Suspense to handle the loading state for lazy-loaded components */}
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <VehicleSelector />
                <Star />
                <AnimatedStar/>
                <SwitchRadio/>
                <PaymentSelector/>
                <TabSelector/>
                <ValueTabSelector/>
            </Suspense>
        </ThemeProvider>
    );
};

export default App4;
