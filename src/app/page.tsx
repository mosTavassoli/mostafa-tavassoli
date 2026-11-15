import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { SectionHeading } from "@/components/section-heading";
import { experiences, focusAreas } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="hero section-pad">
        <div className="page-grid hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · Milan, Italy</p>
            <h1>
              Building systems that stay <em>reliable</em> when reality gets
              complicated.
            </h1>
            <p className="hero-intro">
              I’m Mostafa, a backend engineer working across APIs, databases,
              integrations, and security. I’m exploring distributed systems,
              cloud-native platforms, and trustworthy AI infrastructure.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">
                Explore my work <Arrow />
              </Link>
              <Link className="text-link" href="/writing">
                Read my notes <Arrow />
              </Link>
            </div>
          </div>

          <aside className="hero-note" aria-label="Current focus">
            <span className="signal-dot" />
            <p className="mono-label">CURRENTLY EXPLORING</p>
            <p>
              How to evaluate infrastructure agents safely—with reproducible
              Kubernetes failures, evidence-based scoring, and strict security
              boundaries.
            </p>
            <Link href="/projects">Follow the project →</Link>
          </aside>
        </div>
      </section>

      <section className="section-pad ruled-section">
        <div className="page-grid">
          <SectionHeading
            index="01"
            title="Engineering focus"
            copy="The problems I care about sit where application code meets production reality."
          />
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.title}>
                <span>{area.index}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="page-grid">
          <SectionHeading
            index="02"
            title="Selected impact"
            copy="A few outcomes from building and improving production backend systems."
          />
          <div className="impact-grid">
            <article className="impact-feature">
              <p className="impact-number">17×</p>
              <h3>Faster database operation</h3>
              <p>
                Reduced a 7+ minute operation to 25 seconds by replacing
                row-by-row work with set-based database processing.
              </p>
            </article>
            <article>
              <p className="mono-label">SECURE BY DESIGN</p>
              <h3>Fail-closed upload security</h3>
              <p>
                Designed reliable scanning paths with centralized enforcement,
                auditability, and consistent rejection behavior.
              </p>
            </article>
            <article>
              <p className="mono-label">CONFIDENCE IN CHANGE</p>
              <h3>Real integration tests</h3>
              <p>
                Used Docker-backed Testcontainers and Linux CI to expose
                behavior hidden by local platform differences.
              </p>
            </article>
          </div>
          <p className="context-note">
            Descriptions are intentionally high-level and exclude confidential
            implementation details.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-grid">
          <SectionHeading
            index="03"
            title="Experience"
            copy="A path from frontend and full-stack work toward backend reliability and platform thinking."
          />
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-row" key={experience.company}>
                <p className="timeline-date">{experience.period}</p>
                <div>
                  <h3>{experience.role}</h3>
                  <p className="company">{experience.company}</p>
                </div>
                <p>{experience.summary}</p>
              </article>
            ))}
          </div>
          <Link className="text-link section-link" href="/work">
            View the complete journey <Arrow />
          </Link>
        </div>
      </section>

      <section className="section-pad warm-section">
        <div className="page-grid">
          <SectionHeading
            index="04"
            title="Field notes"
            copy="Practical writing about systems, security, and what I learn while building."
          />
          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                <div className="post-meta">
                  <span>{post.category}</span>
                  <time dateTime={post.date}>{post.readingTime}</time>
                </div>
                <h3>
                  <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <Link
                  className="card-link"
                  href={`/writing/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                >
                  <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad closing-section">
        <div className="page-grid closing-grid">
          <p className="eyebrow">Let’s exchange ideas</p>
          <h2>Interested in reliable systems, platform engineering, or AI safety?</h2>
          <div>
            <p>
              I’m always interested in thoughtful engineering conversations,
              open-source collaboration, and difficult backend problems.
            </p>
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/mostafa-tavassoli/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
