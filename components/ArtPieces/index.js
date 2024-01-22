import ArtPiecePreview from "../ArtPiecePreview";
import { StyledUl } from "@/styles";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <StyledUl>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              name={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </StyledUl>
    </>
  );
}
