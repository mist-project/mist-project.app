import type { JSX } from "react";

import architectureImage from "/src/assets/mist-project-arch.png";
import {
  AnsibleIcon,
  NginxIcon,
  RedisIcon,
  CloudflareIcon,
  PostgreSQLIcon,
  GoIcon,
  PythonIcon,
  ReactIcon,
  DockerIcon,
  TerraformIcon,
  ProxmoxIcon,
  WoodpeckerIcon,
} from "../Icons";

type StackCardProps = {
  title: string;
  description: string;
  icon?: JSX.Element; // Optional icon prop for future use
};

const StackCard = ({
  title,
  description,
  icon,
}: StackCardProps): JSX.Element => {
  return (
    <div className="rounded-lg border border-line p-3">
      <div className="flex flex-row items-center gap-1">
        {icon && <>{icon}</>}
        <h4 className="font-medium">{title}</h4>
      </div>
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
              src={architectureImage}
              alt="Mist Project Architecture"
              className="max-w-full h-auto rounded"
            />
          </div>
        </div>

        <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
          <StackCard
            title="Cloudflare"
            description="DNS Provider."
            icon={<CloudflareIcon size="medium" />}
          />
          <StackCard
            title="NGINX"
            icon={<NginxIcon size="medium" />}
            description="Webserver and reverse proxy for routing requests."
          />
          <StackCard
            title="Redis (Pub/Sub)"
            icon={<RedisIcon size="medium" />}
            description="Redis Pub/Sub is used for real-time messages to be delivered to users. 
            The backend service publishes events to Redis channels, and the IO service subscribes to
            these channels to receive and forward messages to connected clients."
          />
          <StackCard
            title="PostgreSQL"
            icon={<PostgreSQLIcon size="medium" />}
            description="Used for storing and querying structured data."
          />
          <StackCard
            title="Backend Service (Go)"
            icon={<GoIcon size="medium" />}
            description="Core business logic and data layer. Manages control access to resources, stores all the
            necessary data to support the application functionalities."
          />
          <StackCard
            title="IO Service (Go)"
            icon={<GoIcon size="medium" />}
            description="Real-time data and messaging layer for event handling, streaming,
              and bidirectional communication between clients and backend. Clients establish a websocket connection
              to this service to receive real-time updates."
          />
          <StackCard
            title="API Service (Go)"
            icon={<GoIcon size="medium" />}
            description="REST interface exposing backend capabilities to external systems,
              with structured endpoints."
          />
          <StackCard
            title="Auth Service (Python)"
            icon={<PythonIcon size="medium" />}
            description="Authentication & Identity Service – A dedicated Django-powered
              service responsible for managing user identities, authentication
              flows, and authorization logic. It handles secure login,
              registration, password management, and token issuance (JWT/OAuth)"
          />
          <StackCard
            title="Frontend (React)"
            icon={<ReactIcon size="medium" />}
            description="Single-page application providing user interface and client-side
              logic, communicating with backend services via APIs and establishing websocket connections."
          />
          <StackCard
            title="Woodpecker CI"
            icon={<WoodpeckerIcon size="medium" />}
            description="CI/CD platform for automating build, test, and deployment pipelines. Integrated with Github,
            enabling automated workflows for code changes."
          />
          <StackCard
            title="Docker Registry"
            icon={<DockerIcon size="medium" />}
            description="Repository for storing and managing Docker container images."
          />
          <StackCard
            title="Ansible"
            icon={<AnsibleIcon size="medium" />}
            description="Automation tool for configuration management, application deployment,
              and task automation across services in the Proxmox VMs."
          />
          <StackCard
            title="Terraform"
            icon={<TerraformIcon size="medium" />}
            description="Infrastructure as Code (IaC) tool for provisioning and managing cloud
              resources in Proxmox environment."
          />
          <StackCard
            title="Proxmox"
            icon={<ProxmoxIcon size="medium" />}
            description="Open-source virtualization management platform for managing virtual
              machines, containers, and storage in a unified interface. The entire
              infrastructure is hosted in a Proxmox VE cluster."
          />
        </div>
      </div>
    </section>
  );
};

export default Architecture;
