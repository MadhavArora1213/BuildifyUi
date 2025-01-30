import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import SimpleForm from "./registry/Components/Forms/SimpleForm";
import ToggleForm from "./registry/Components/Forms/ToggleForm";
import GradientForm from "./registry/Components/Forms/GradientForm";
// Lazy load components

const Navbar = lazy(() => import("./components/core/Navbar"));
const App: React.FC = () => {
    return (
        <ThemeProvider>
            {/* Suspense to handle the loading state for lazy-loaded components */}
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                {/* <SimpleForm /> */}
                <ToggleForm />
                <GradientForm/>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
