import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import ShootingStar from "./registry/Components/Patterns/ShootingStar";
import GridPattern from "./registry/Components/Patterns/GridPattern";
import StraightStar from "./registry/Components/Patterns/StraightStar";
import DottedStar from "./registry/Components/Patterns/DottedStar";

// Lazy load components

const Navbar = lazy(() => import("./components/core/Navbar"));
const App: React.FC = () => {
    return (
        <ThemeProvider>
            {/* Suspense to handle the loading state for lazy-loaded components */}
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                {/* <ShootingStar /> */}
                {/* <GridPattern/> */}
                {/* <StraightStar/> */}
                <DottedStar/>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
