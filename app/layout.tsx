import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youness El Mourid",
  description: "Portfolio de Youness El Mourid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}