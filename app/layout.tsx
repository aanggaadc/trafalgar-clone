import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import localFont from "next/font/local";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("settings");
  return {
    title: page.data.site_title,
    description: page.data.meta_description,
  };
}

const sourceSerif = localFont({
  src: [
    {
      path: "../public/fonts/SourceSerifPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SourceSerifPro-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SourceSerifPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-source-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSerif.variable}>{children}</body>
    </html>
  );
}
