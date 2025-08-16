import type { JSX } from "react";

const Summary = (): JSX.Element => {
  return (
    <section className="py-16 md:py-20">
      <div>
        <h1 className="text-3xl md:text-3xl font-semibold tracking-tight">
          Mist — Real-time communication & collaboration{" "}
        </h1>
        <span className="text-xs px-2 py-0.5 rounded border border-amber/40 text-amber">
          In Development
        </span>
        <p className="mt-4 text-ink/70 max-w-prose">
          Community-driven communication app that blends voice, video, and text
          chat into a single, highly interactive space for friends, teams, and
          interest groups to connect and collaborate in real time.
        </p>
        {/* <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#features"
            className="px-5 py-2 rounded bg-teal/20 border border-teal/50 hover:bg-teal/30 transition"
          >
            Explore Features
          </a>
          <a
            href="#architecture"
            className="px-5 py-2 rounded border border-line hover:border-amber/60 hover:text-amber transition"
          >
            View Architecture
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Summary;
