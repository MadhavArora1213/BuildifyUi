import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import SimpleForm from "./registry/Components/Forms/SimpleForm";
import ToggleForm from "./registry/Components/Forms/ToggleForm";
import GradientForm from "./registry/Components/Forms/GradientForm";
import SpotLight from "./registry/Components/Forms/SpotLight";
import BorderGradientForm from "./registry/Components/Forms/BorderGradientForm";
import OTPForm from "./registry/Components/Forms/OTPForm";
import AnimatedFieldForm from "./registry/Components/Forms/AnimatedFieldForm";
import GradientBorderForm from './registry/Components/Forms/GradientBorderForm';
import HoverShadowForm from './registry/Components/Forms/HoverShadowForm'


const Navbar = lazy(() => import("./components/core/Navbar"));
const App: React.FC = () => {
    return (
        <ThemeProvider>
            {/* Suspense to handle the loading state for lazy-loaded components */}
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <SimpleForm />
                <ToggleForm />
                <GradientForm/>
                <SpotLight/>
                <BorderGradientForm/>
                <OTPForm/>
                <AnimatedFieldForm />
                <GradientBorderForm />
                <HoverShadowForm />
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
