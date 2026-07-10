import { notFound } from "next/navigation";
import { ComponentDetail } from "@/components/studio/component-detail";
import { StudioShell } from "@/components/studio/studio-shell";
import { componentRegistry, getComponent } from "@/lib/component-registry";

export function generateStaticParams() {
  return componentRegistry.map((item) => ({ slug: item.slug }));
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getComponent(slug);
  if (!entry) notFound();
  return <StudioShell><ComponentDetail entry={entry}/></StudioShell>;
}
