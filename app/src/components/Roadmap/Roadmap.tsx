import type { JSX } from "react";

type RoadmapItemProps = {
  title: string;
  description: string;
  tags: {
    name: string;
    status: "Planned" | "In Progress" | "Research" | "Done" | "Tag";
  }[];
};

// const FeatureCard = ({
//   title,
//   description,
//   tags,
// }: FeatureCardProps): JSX.Element => {
//   return (
//     <article className="rounded-xl border border-line bg-panel/70 p-5 hover:border-teal/50 transition">
//       <h3 className="font-medium">{title}</h3>
//       <p className="mt-2 text-sm text-ink/70">{description}</p>
//       <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
//         {tags.map((tag) => (
//           <span
//             key={tag}
//             className="rounded border border-line px-2 py-0.5 text-ink/70"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </article>
//   );
// };

const RoadmapItem = ({ title, description, tags }: RoadmapItemProps) => {
  return (
    <article className="rounded-lg border border-line bg-panel/70 p-5 hover:border-teal/50 transition">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-gray-300">
        {tags.map((tag) => {
          let color;

          switch (tag.status) {
            case "Planned":
              color = "text-yellow-300 border-yellow-400/40";
              break;
            case "In Progress":
              color = "border-gray-500/60 text-gray-300";
              break;
            case "Research":
              color = "text-blue-300 border-blue-400/40";
              break;
            case "Done":
              color = "border-terminal-green/50 text-terminal-green";
              break;
            case "Tag":
            default:
              color = "text-gray-300 border-border-gray";
          }
          return (
            <span
              key={tag.name}
              className={`rounded border px-2 py-0.5 ${color}`}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    </article>
  );
};

const RoadmapHeader = (): JSX.Element => (
  <section className="py-8">
    <h2 className="text-2xl font-semibold tracking-tight">Project Roadmap</h2>

    <div className="mt-4 flex flex-wrap gap-3 text-xs">
      <span className="rounded border border-gray-500/60 text-gray-300 px-2 py-1">
        In Progress
      </span>
      <span className="rounded border border-yellow-400/40 text-yellow-300 px-2 py-1">
        Planned
      </span>
      <span className="rounded border border-blue-400/40 text-blue-300 px-2 py-1">
        Research
      </span>
      <span className="rounded border border-terminal-green/50 text-terminal-green  px-2 py-1">
        Done
      </span>
    </div>
  </section>
);

const PlannedSection = (): JSX.Element => (
  <div className="space-y-4">
    <h4 className="text-sm font-semibold text-yellow-300/90">Planned</h4>

    <RoadmapItem
      title="Audio channels"
      description="Ability to join live audio channels and communicate with others."
      tags={[
        { name: "Backend", status: "Planned" },
        { name: "API", status: "Planned" },
        { name: "IO", status: "Planned" },
      ]}
    />

    <RoadmapItem
      title="Text channels"
      description="Ability to join live text channels and send messages to others."
      tags={[
        { name: "Backend", status: "Planned" },
        { name: "API", status: "Planned" },
        { name: "IO", status: "Planned" },
      ]}
    />

    <RoadmapItem
      title="Policy-Based Permissions"
      description="Refactor current authorization to use policy-based access control."
      tags={[{ name: "Backend", status: "Planned" }]}
    />

    <RoadmapItem
      title="Account management"
      description="User registration, password reset, profile management ... etc."
      tags={[
        { name: "Auth", status: "Planned" },
        { name: "Backend", status: "Planned" },
      ]}
    />

    <RoadmapItem
      title="Calendar Integration"
      description="Integrate a calendar for managing events and deadlines."
      tags={[
        { name: "API", status: "Planned" },
        { name: "Backend", status: "Planned" },
      ]}
    />
  </div>
);

const InProgressSection = (): JSX.Element => (
  <div className="space-y-4">
    <h4 className="text-sm font-semibold border-gray-500/60 text-gray-300">
      In Progress
    </h4>

    <RoadmapItem
      title="Live Notifications and Updates"
      description="Real-time updates for messages and events."
      tags={[{ name: "IO", status: "In Progress" }]}
    />

    <RoadmapItem
      title="Server roles and permissions"
      description="Granular access control for different user roles in a server. (CRUD)"
      tags={[
        { name: "Backend", status: "Done" },
        { name: "API", status: "In Progress" },
        { name: "IO", status: "In Progress" },
      ]}
    />

    <RoadmapItem
      title="Infrastructure improvements (CI/CD)"
      description="Standardize secrets storage, add logging, monitoring, better production builds and more."
      tags={[
        { name: "Backend", status: "In Progress" },
        { name: "API", status: "In Progress" },
        { name: "IO", status: "In Progress" },
        { name: "Auth", status: "In Progress" },
      ]}
    />
  </div>
);

const CompletedSection = (): JSX.Element => (
  <div className="space-y-4">
    <h4 className="text-sm font-semibold border-terminal-green/50 text-terminal-green">
      Done
    </h4>

    <RoadmapItem
      title="Server Basics"
      description="Create, join, leave, and list channels."
      tags={[
        { name: "Backend", status: "Done" },
        { name: "API", status: "Done" },
        { name: "IO", status: "Done" },
      ]}
    />

    <RoadmapItem
      title="Authentication and Authorization System"
      description="User login, and JWT-based auth."
      tags={[
        { name: "API", status: "Done" },
        { name: "Auth", status: "Done" },
        { name: "Backend", status: "Done" },
        { name: "IO", status: "Done" },
      ]}
    />

    <RoadmapItem
      title="Infrastructure (CI/CD)"
      description="Set up continuous integration and deployment pipelines."
      tags={[
        { name: "Backend", status: "Done" },
        { name: "API", status: "Done" },
        { name: "IO", status: "Done" },
        { name: "Auth", status: "Done" },
      ]}
    />
  </div>
);

const Roadmap = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <RoadmapHeader />

      <section id="q3" className="py-8 border-t border-border-gray/70">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Features</h3>
          <span className="text-xs font-mono text-gray-400"></span>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <PlannedSection />
          <InProgressSection />
          <CompletedSection />
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
