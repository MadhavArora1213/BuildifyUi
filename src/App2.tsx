import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import Checkbox2 from "./registry/Components/CheckBoxes/CheckBox2";
import Checkbox3 from "./registry/Components/CheckBoxes/CheckBox3";
import Checkbox4 from "./registry/Components/CheckBoxes/CheckBox4";
import Checkbox5 from "./registry/Components/CheckBoxes/CheckBox5";
import Checkbox6 from "./registry/Components/CheckBoxes/CheckBox6";
import Checkbox7 from "./registry/Components/CheckBoxes/CheckBox7";
// Lazy load components

const Navbar = lazy(() => import("./components/core/Navbar"));
const Checkbox1 = lazy(() => import("./registry/Components/CheckBoxes/CheckBox1"));
const App: React.FC = () => {
  return (
    <ThemeProvider>
      {/* Suspense to handle the loading state for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Checkbox1/>
        <Checkbox2/>
        <Checkbox3/>
        <Checkbox4/>
        <Checkbox5/>
        <Checkbox6/>
        <Checkbox7/>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
