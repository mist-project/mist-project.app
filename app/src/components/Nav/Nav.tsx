import type { JSX } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";

const Nav = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-base/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm tracking-wider text-ink/80">
            Mist Project
          </span>
        </div>

        <div className="flex items-center gap-3">
          {location.pathname === "/roadmap" ? (
            <Link
              className="text-sm px-3 py-1.5 rounded border border-line hover:border-teal/50 hover:text-teal transition"
              to="/"
            >
              Home
            </Link>
          ) : (
            <Link
              className="text-sm px-3 py-1.5 rounded border border-line hover:border-teal/50 hover:text-teal transition"
              to="/roadmap"
            >
              Roadmap
            </Link>
          )}
          <a
            href="https://github.com/mist-project"
            target="_blank"
            className="text-sm px-3 py-1.5 rounded bg-teal/20 border border-teal/40 hover:bg-teal/30 hover:border-teal/60 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
