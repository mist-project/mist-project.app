import type { JSX } from "react";

const Tech = ({ name }: { name: string }): JSX.Element => {
  return (
    <span className="px-3 py-1.5 rounded-full border border-line bg-panel/80">
      {name}
    </span>
  );
};

const TechStack = (): JSX.Element => {
  return (
    <section id="stack" className="py-14 border-t border-line/70">
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <div className="mt-4 flex flex-wrap gap-2 text-[12px]">
        <Tech name="Go" />
        <Tech name="Python" />
        <Tech name="React" />
        <Tech name="TypeScript" />
        <Tech name="WebSocket" />
        <Tech name="PostgreSQL" />
        <Tech name="Redis" />
        <Tech name="Docker" />
        <Tech name="Terraform" />
        <Tech name="Ansible" />
      </div>
    </section>
  );
};

export default TechStack;
