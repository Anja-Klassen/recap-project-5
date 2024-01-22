import { ArtPiecePreview } from "../ArtPiecePreview";
import { ArtPiece } from "../ArtPieces";
import React from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {
  if (!image || !artist) {
    return <p>is Loading...</p>;
  }
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const spotlightPiece = pieces[randomIndex];
  return (
    <div>
      <h2>Spotlight</h2>
      <Image
        src={image}
        alt={`Kunstwerk von ${artist}`}
        height={500}
        width={500}
      />
      <p>Artist: {artist}</p>
    </div>
  );
}
