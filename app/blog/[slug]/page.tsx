import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <article>
      {/* Back link */}
      <div style={{ marginBottom: "3rem" }}>
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--color-muted)",
            textDecoration: "none",
            letterSpacing: "0.03em",
          }}
        >
          ← writing
        </Link>
      </div>

      {/* Post header */}
      <header style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--color-muted)",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}
        >
          {formatDate(post.date)}
        </p>

        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.4rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            color: "var(--color-text)",
            marginBottom: post.description ? "1rem" : 0,
          }}
        >
          {post.title}
        </h1>

        {post.description && (
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-muted)",
              lineHeight: 1.6,
              maxWidth: "55ch",
            }}
          >
            {post.description}
          </p>
        )}

        {post.tags && post.tags.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--color-muted)",
                  background: "var(--color-raised)",
                  border: "1px solid var(--color-border)",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "3px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--color-border)",
          marginBottom: "3rem",
        }}
      />

      {/* Post content */}
      <div className="prose">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
