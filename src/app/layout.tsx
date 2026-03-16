import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy 27th Birthday, Kuu 💜",
  description:
    "A special birthday celebration for my beautiful Clarion Clara — my Kuu.",
  openGraph: {
    title: "Happy 27th Birthday, Kuu 💜",
    description: "A love letter to the most beautiful soul I know.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
