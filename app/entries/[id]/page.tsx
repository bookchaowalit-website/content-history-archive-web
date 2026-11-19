import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EraView, SITE } from "@/components/archive-views";
import { eras } from "@/lib/archive";

type Props = { params: Promise<{ id: string }> };
export const dynamicParams = false;

const find = async ({ params }: Props) => {
  const { id } = await params;
  return eras.find((era) => era.id === id);
};

export function generateStaticParams() {
  return eras.map((era) => ({ id: era.id }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const era = await find(props);
  if (!era) return {};
  // Each entry shares as itself (layout.tsx sets the home page's Open Graph data).
  return {
    title: era.title,
    description: era.note,
    alternates: { canonical: `/entries/${era.id}` },
    openGraph: { type: "article", url: `${SITE}/entries/${era.id}`, title: era.title, description: era.note, siteName: "Archive Ribbon" },
    twitter: { card: "summary", title: era.title, description: era.note },
  };
}

export default async function EraPage(props: Props) {
  const era = await find(props);
  if (!era) notFound();
  return <EraView era={era} eras={eras} />;
}
