import React from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {
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
