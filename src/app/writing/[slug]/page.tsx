import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function WritingPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  return (
    <article className="article-shell">
      <header className="article-header">
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <div className="article-meta">
          <time dateTime={post.date}>{post.date}</time>
          <span>{post.readingTime}</span>
        </div>
      </header>
      <div className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
