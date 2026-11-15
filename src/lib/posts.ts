import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "writing");

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
};

export type Post = PostSummary & { contentHtml: string };

function readPostFile(fileName: string) {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug, content,
    title: String(data.title), description: String(data.description), date: String(data.date),
    category: String(data.category), readingTime: String(data.readingTime),
  };
}

export function getAllPosts(): PostSummary[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPostFile)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      category: post.category,
      readingTime: post.readingTime,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const source = readPostFile(`${slug}.md`);
  const processed = await remark().use(html).process(source.content);
  return {
    slug: source.slug,
    title: source.title,
    description: source.description,
    date: source.date,
    category: source.category,
    readingTime: source.readingTime,
    contentHtml: processed.toString(),
  };
}
