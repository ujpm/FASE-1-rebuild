import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { CourseProvider } from "./providers/CourseProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FASE-1 - First Aid Support & Education",
  description: "Empowering communities to save lives through knowledge and action",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <CourseProvider>
          <Layout>{children}</Layout>
        </CourseProvider>
      </body>
    </html>
  );
}