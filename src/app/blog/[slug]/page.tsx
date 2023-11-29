import { Metadata } from "next";
import Card from "./ui/card";

type Props = {
  params: {
    slug: string;
  };
};

export default function EntryPage({ params }: Props) {
  return (
    <>
      <h1>Entry Page - {params.slug}</h1>
      <Card entry={params.slug} />
    </>
  );
}

// // Build
// export async function generateStaticParams() {
//   const posts = [
//     {
//       id: "1",
//       slug: "entrada-1",
//     },
//     {
//       id: "2",
//       slug: "entrada-2",
//     },
//   ];

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// Metadatos dinámicos
export async function generateMetadata({ params }: Props) {
  const titulo = `Entrada - ${params.slug}`;
  const metadata: Metadata = {
    title: titulo,
    description: `Detalle de la página ${params.slug}`,
  };
  return metadata;
}
