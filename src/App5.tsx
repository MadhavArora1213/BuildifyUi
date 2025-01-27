import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import SimpleInput from "./registry/Components/Input/SimpleInput";
import PasswordInput from "./registry/Components/Input/PasswordInput";
import GradientInput from "./registry/Components/Input/GradientInput";
import AnimatedInput from "./registry/Components/Input/AnimatedInput";
import ShadowInput from "./registry/Components/Input/ShadowInput";
import BlackSearchInput from "./registry/Components/Input/BlackSerachInput";
import EmojiInput from "./registry/Components/Input/EmojiInput";
import FileInput from "./registry/Components/Input/FileInput";
import AnimatedTextInput from "./registry/Components/Input/AnimatedTextInput";


// Lazy load components

const Navbar = lazy(() => import("./components/core/Navbar"));

const App5: React.FC = () => {
    return (
        <ThemeProvider>
            {/* Suspense to handle the loading state for lazy-loaded components */}
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
               <SimpleInput/>
               <PasswordInput/>
               <GradientInput/>
               <AnimatedInput/>
               <ShadowInput/>
               <BlackSearchInput/>
               <EmojiInput/>
               <FileInput/>
               <AnimatedTextInput/>
            </Suspense>
        </ThemeProvider>
    );
};

export default App5;
