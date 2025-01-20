import React, { Suspense, lazy } from "react";

// Lazy load the SpotlightButton to optimize performance
const SpotlightButton = lazy(() => import("./SpotlightButton"));

const ButtonWrapper = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center px-4 ">
      <Suspense>
        <SpotlightButton />
      </Suspense>
    </div>
  );
};

export default ButtonWrapper;
