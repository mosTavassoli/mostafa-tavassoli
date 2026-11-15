import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  const posts = getAllPosts();
  return (
    <>
      <section className="page-hero">
        <div className="page-grid">
          <p className="eyebrow">Writing</p>
          <h1 className="page-title">Notes from building and learning.</h1>
          <p className="page-lead">
            Practical observations about backend engineering, distributed
            systems, cloud-native platforms, security, and applied AI.
          </p>
        </div>
      </section>
      <section className="detail-section">
        <div className="page-grid listing-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.slug}>
              <div className="post-meta">
                <span>{post.category}</span>
                <time dateTime={post.date}>{post.readingTime}</time>
              </div>
              <h3><Link href={`/writing/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.description}</p>
              <Link className="card-link" href={`/writing/${post.slug}`} aria-label={`Read ${post.title}`}><Arrow /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
