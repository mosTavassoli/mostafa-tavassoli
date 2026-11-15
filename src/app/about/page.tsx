import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-grid">
          <p className="eyebrow">About</p>
          <h1 className="page-title">Engineering with curiosity and operational empathy.</h1>
          <p className="page-lead">
            I’m a software engineer based in Italy, focused on backend systems
            and increasingly drawn to distributed systems, platform engineering,
            cloud-native security, and applied AI.
          </p>
        </div>
      </section>
      <section className="detail-section">
        <div className="page-grid detail-grid">
          <aside>My approach</aside>
          <div className="detail-copy">
            <h2>Build the simple thing that survives contact with reality.</h2>
            <p>
              My career began closer to the frontend and moved steadily toward
              APIs, databases, integrations, and production reliability. That
              path taught me to care about the whole system: user experience,
              service boundaries, failure modes, operations, and the people who
              need to understand the software later.
            </p>
            <p>
              I enjoy work where correctness is observable rather than assumed.
              That includes integration tests against real dependencies,
              measurable performance improvements, explicit security boundaries,
              and documentation that records why a decision was made.
            </p>
          </div>
        </div>
      </section>
      <section className="detail-section warm-section">
        <div className="page-grid detail-grid">
          <aside>Where I’m heading</aside>
          <div className="detail-copy">
            <h2>From strong backend execution to platform-level impact.</h2>
            <p>
              I’m building deeper experience with Kubernetes, Kafka, Redis,
              AWS, observability, and distributed-system failure modes. In
              parallel, I’m studying how AI agents can interact with
              infrastructure without receiving unsafe authority or leaking
              sensitive context.
            </p>
            <p>
              My long-term goal is to grow into Staff or Platform Engineering,
              contribute meaningful open-source infrastructure, and eventually
              use that experience to build a company around a validated problem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
