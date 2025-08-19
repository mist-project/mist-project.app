import type { JSX } from "react";

import Architecture from "./Architecture";
import Features from "./Features";
import Summary from "./Summary";

const Home = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Summary />
      <Features />
      {/* <TechStack /> */}
      <Architecture />
    </div>
  );
};

export { Home };
