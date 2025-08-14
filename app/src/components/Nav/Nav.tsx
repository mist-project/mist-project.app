import type { JSX } from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: JSX.Element;
}) => {
  return (
    <a
      href={href}
      className="px-4 py-1.5 rounded-full text-sm text-ink/70 hover:text-ink hover:bg-line/40 transition"
    >
      {children}
    </a>
  );
};

const Nav = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-base/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal/70 to-amber/70"></div>
          <span className="font-mono text-sm tracking-wider text-ink/80">
            mist
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-2 p-1 rounded-full bg-panel/80 border border-line shadow-glass">
          <NavLink href="#">
            <>Home</>
          </NavLink>
          {/* <NavLink href="#features">
            <>Features</>
          </NavLink>
          <NavLink href="#architecture">
            <>Architecture</>
          </NavLink>
          <NavLink href="#stack">
            <>Tech Stack</>
          </NavLink>
          <NavLink href="#faq">
            <>FAQ</>
          </NavLink> */}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#demo"
            className="text-sm px-3 py-1.5 rounded border border-line hover:border-teal/50 hover:text-teal transition"
          >
            Roadmap
          </a>
          <a
            href="#repo"
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
