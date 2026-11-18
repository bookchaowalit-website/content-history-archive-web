import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SITE } from "@/components/archive-views";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const title = "Archive Ribbon — History study notes";
const description = "A museum-label timeline of four synthetic study entries, each with one question to carry forward.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — Archive Ribbon" },
  description,
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: SITE, title, description, siteName: "Archive Ribbon" },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // The font variable sits on <html>: the Reader shell tokens live on :root and read it from there.
  return <html lang="en" className={geistSans.variable}><body>{children}</body></html>;
}
