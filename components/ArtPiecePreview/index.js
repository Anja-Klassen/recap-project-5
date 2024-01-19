import Image from "next/image";

export default function ArtPiecePreview({ image, name, artist }) {
  return (
    <div>
      <Image src={image} alt={name} height={500} width={500} />
      <p>
        {name} by {artist}
      </p>
    </div>
  );
}
