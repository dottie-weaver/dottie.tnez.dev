import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/posts";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#1a1714",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#e8a020",
            fontSize: 24,
            fontFamily: "monospace",
            marginBottom: 36,
            letterSpacing: "0.1em",
          }}
        >
          dottie.tnez.dev
        </div>
        <div
          style={{
            color: "#f5f0e8",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 28,
            maxWidth: "900px",
          }}
        >
          {post?.title ?? "Writing"}
        </div>
        {post?.description && (
          <div
            style={{
              color: "#8a7f72",
              fontSize: 28,
              lineHeight: 1.5,
              maxWidth: "860px",
            }}
          >
            {post.description}
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}
