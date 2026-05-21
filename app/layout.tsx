import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "JUSTWHYTEAM | Faceless Creative Collective",
  description:
    "JUSTWHYTEAM turns ideas into visuals, brands, films, systems, and digital energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
