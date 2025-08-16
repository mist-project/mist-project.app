import type { JSX } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  tags: string[];
};

const FeatureCard = ({
  title,
  description,
  tags,
}: FeatureCardProps): JSX.Element => {
  return (
    <article className="rounded-xl border border-line bg-panel/70 p-5 hover:border-teal/50 transition">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-ink/70">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-line px-2 py-0.5 text-ink/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

const Features = (): JSX.Element => {
  return (
    <section id="features" className="py-14 border-t border-line/70">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Features</h2>
        <a
          href="#repo"
          className="text-sm text-ink/70 hover:text-teal transition"
        >
          See on GitHub →
        </a>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Configurable servers and channels"
          description="Create and manage multiple servers and channels with custom settings."
          tags={[]}
        />
        <FeatureCard
          title="Real-time Channels"
          description="Low-latency messaging with presence, typing indicators, and read receipts."
          tags={[]}
        />

        <FeatureCard
          title="Role-Based Permission System"
          description="Role-based permissions for channels, files, and admin actions."
          tags={[]}
        />

        <FeatureCard
          title="Calendar Integration"
          description="Includes a calendar to manage events and deadlines."
          tags={[]}
        />
      </div>
    </section>
  );
};

export default Features;
