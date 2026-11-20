import type { Metadata } from "next";
import { Arrow } from "@/components/arrow";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-grid">
          <p className="eyebrow">Open source & experiments</p>
          <h1 className="page-title">Projects designed to teach by being useful.</h1>
          <p className="page-lead">
            I’m building open-source tools to test whether AI agents can do
            their jobs safely, from processing Kafka events to diagnosing
            Kubernetes failures.
          </p>
        </div>
      </section>
      <section className="detail-section">
        <div className="page-grid project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.repository}>
              <span className="project-status">{project.status}</span>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <ul className="project-pill-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a
                className="text-link section-link"
                href={project.repository}
                aria-label={`View ${project.name} on GitHub`}
              >
                View on GitHub <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
