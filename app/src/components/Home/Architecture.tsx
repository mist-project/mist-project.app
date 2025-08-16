import type { JSX } from "react";

type StackCardProps = {
  title: string;
  description: string;
};

const StackCard = ({ title, description }: StackCardProps): JSX.Element => {
  return (
    <div className="rounded-lg border border-line p-3">
      <h4 className="font-medium">{title}</h4>
      <p className="mt-1 text-ink/70">{description}</p>
    </div>
  );
};

const Architecture = (): JSX.Element => {
  return (
    <section id="architecture" className="py-14 border-t border-line/70">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Architecture</h2>
        <span className="text-xs font-mono text-ink/60">high level</span>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-panel/70 p-5">
        <div className="aspect-[16/9] w-fullgrid place-items-center">
          <div className="text-center">
            <img
              src="/src/assets/mist-project-arch.png"
              alt="Mist Project Architecture"
              className="max-w-full h-auto rounded"
            />
          </div>
        </div>

        <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
          <StackCard title="Cloudflare" description="DNS Provider." />
          <StackCard
            title="NGINX"
            description="Webserver and reverse proxy for routing requests."
          />
          <StackCard
            title="Redis (Pub/Sub)"
            description="In-memory data structure store for caching and real-time messaging."
          />
          <StackCard
            title="PostgreSQL"
            description="Relational database management system, used for storing and querying structured data."
          />
          <StackCard
            title="Backend Service (Go)"
            description="Core business logic and orchestration layer, handling workflows,
              validation, and data processing."
          />
          <StackCard
            title="IO Service (Go)"
            description="Real-time data and messaging layer for event handling, streaming,
              and bidirectional communication between clients and backend."
          />
          <StackCard
            title="API Service (Go)"
            description="REST interface exposing backend capabilities to external systems,
              with structured endpoints."
          />
          <StackCard
            title="Auth Service (Python)"
            description="Authentication & Identity Service – A dedicated Django-powered
              service responsible for managing user identities, authentication
              flows, and authorization logic. It handles secure login,
              registration, password management, and token issuance (JWT/OAuth)"
          />
          <StackCard
            title="Frontend (React)"
            description="Single-page application providing user interface and client-side
              logic, communicating with backend services via APIs."
          />
          <StackCard
            title="Woodpecker CI"
            description="CI/CD platform for automating build, test, and deployment pipelines."
          />
          <StackCard
            title="Docker Registry"
            description="Repository for storing and managing Docker container images."
          />
          <StackCard
            title="Ansible"
            description="Automation tool for configuration management, application deployment,
              and task automation across services in the Proxmox VMs."
          />
          <StackCard
            title="Terraform"
            description="Infrastructure as Code (IaC) tool for provisioning and managing cloud
              resources in Proxmox environment."
          />
          <StackCard
            title="Proxmox"
            description="Open-source virtualization management platform for managing virtual
              machines, containers, and storage in a unified interface. The entire
              infrastructure is hosted on a Proxmox VE cluster."
          />
        </div>
      </div>
    </section>
  );
};

export default Architecture;
