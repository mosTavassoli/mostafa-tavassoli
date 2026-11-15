import type { Metadata } from "next";
import { experiences } from "@/data/site";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-grid">
          <p className="eyebrow">Experience</p>
          <h1 className="page-title">Building dependable software across the stack.</h1>
          <p className="page-lead">
            More than four years of experience spanning frontend applications,
            backend APIs, integrations, databases, security, and automated testing.
          </p>
        </div>
      </section>
      <section className="detail-section">
        <div className="page-grid experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.company}>
              <header>
                <div>
                  <h2>{experience.role}</h2>
                  <p className="company">{experience.company}</p>
                </div>
                <time>{experience.period}</time>
              </header>
              <ul>
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
