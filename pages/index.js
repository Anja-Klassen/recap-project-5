import Spotlight from "@/components/Sportlight";
import { StyledDiv } from "@/styles";

export default function SpotlightPage({ pieces }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const spotlightPiece = pieces[randomIndex];

  return (
    <StyledDiv>
      <h1>Best Art App Ever</h1>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
    </StyledDiv>
  );
}
