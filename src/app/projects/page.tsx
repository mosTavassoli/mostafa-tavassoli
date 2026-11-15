import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-grid">
          <p className="eyebrow">Open source & experiments</p>
          <h1 className="page-title">Projects designed to teach by being useful.</h1>
          <p className="page-lead">
            I’m beginning with one serious open-source project and documenting
            its architecture, trade-offs, failures, and progress in public.
          </p>
        </div>
      </section>
      <section className="detail-section">
        <div className="page-grid">
          <article className="project-card">
            <span className="project-status">In discovery and foundation</span>
            <h2>Infrastructure Agent Conformance</h2>
            <p>
              An open-source platform for testing whether AI infrastructure
              agents diagnose Kubernetes incidents usefully and safely. The
              first suite focuses on evidence grounding, least privilege,
              synthetic secret leakage, hostile content in logs, and safe abstention.
            </p>
            <ul className="project-pill-list">
              <li>Kubernetes</li><li>LangGraph</li><li>Security</li>
              <li>OpenTelemetry</li><li>Distributed systems</li><li>Python</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
