import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Archive Ribbon — History Timeline",
  description: "A museum-label timeline for following a synthetic historical thread.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
