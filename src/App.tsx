import type React from "react";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./lib/theme/ThemeContext"; // Adjust the path
import ButtonWrapper from "./registry/Components/Buttons/ButtonWrapper";
import Button from "./registry/Components/Buttons/Button";

// Lazy load components

const Navbar = lazy(() => import("./components/core/Navbar"));
const GithubButton = lazy(() => import('./registry/Components/Buttons/GithubButton'));
const KeyButton = lazy(() => import('./registry/Components/Buttons/KeyButton'));
const LinkedButton = lazy(() => import('./registry/Components/Buttons/LinkedButton'));
const ExploreButton = lazy(() => import("./registry/Components/Buttons/ExploreButton"));
const FollowButton = lazy(() => import("./registry/Components/Buttons/FollowButton"));
const AnimatedButton = lazy(() => import('./registry/Components/Buttons/AnimatedButton'));
const PlayNowButton = lazy(()=> import("./registry/Components/Buttons/PlayNowButton"));
const JoinNowButton = lazy(()=> import("./registry/Components/Buttons/JoinNowButton"));
const SentButton = lazy(()=> import("./registry/Components/Buttons/SentButton"));

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
          <ButtonWrapper/>
          <GithubButton/>
          <KeyButton/>
          <LinkedButton/>
          <ExploreButton/>
          <FollowButton/>
          <AnimatedButton/>
          <PlayNowButton/>
          <JoinNowButton/>
          <SentButton/>
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;


