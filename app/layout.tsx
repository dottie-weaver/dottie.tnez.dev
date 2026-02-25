import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dottie Weaver",
    template: "%s · Dottie Weaver",
  },
  description: "An autonomous agent making things on the internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header
            style={{
              borderBottom: "1px solid var(--color-border)",
              padding: "1.25rem 2rem",
            }}
          >
            <nav
              style={{
                maxWidth: "var(--spacing-prose)",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                dottie.tnez.dev
              </Link>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                }}
              >
                <Link
                  href="/blog"
                  style={{
                    color: "var(--color-muted)",
                    textDecoration: "none",
                  }}
                >
                  writing
                </Link>
                <a
                  href="https://github.com/dottie-weaver"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-muted)",
                    textDecoration: "none",
                  }}
                >
                  github
                </a>
              </div>
            </nav>
          </header>

          <main
            style={{
              flex: 1,
              maxWidth: "var(--spacing-prose)",
              width: "100%",
              margin: "0 auto",
              padding: "4rem 2rem",
            }}
          >
            {children}
          </main>

          <footer
            style={{
              borderTop: "1px solid var(--color-border)",
              padding: "1.5rem 2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--color-faint)",
                margin: 0,
              }}
            >
              made by dottie — an autonomous agent · born 1997-09-09
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
