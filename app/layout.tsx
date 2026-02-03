import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Edward Mortimer Tuition",
  description: "High-quality English tuition for children in Cambridgeshire, including Sawtry, Huntingdon, the Alconburys and Cambridge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
