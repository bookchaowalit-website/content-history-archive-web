import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EraView } from "@/components/archive-views";
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
  return era ? { title: era.title, description: era.note, alternates: { canonical: `/entries/${era.id}` } } : {};
}

export default async function EraPage(props: Props) {
  const era = await find(props);
  if (!era) notFound();
  return <EraView era={era} eras={eras} />;
}
