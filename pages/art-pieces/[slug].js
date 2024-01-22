import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function DetailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece || !slug) {
    return <p>No Art Piece found...</p>;
  }

  return (
    <>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
      />
    </>
  );
}
