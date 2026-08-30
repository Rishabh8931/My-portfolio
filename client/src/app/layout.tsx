import type { Metadata } from "next";
import ThemeProvider from "./Provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rishabh Pal — Software Engineer",
  description:
    "Software engineer building systems, developer tools and products.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
