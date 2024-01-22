import Spotlight from "@/components/Sportlight";
import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";
import { StyledDiv } from "@/styles";

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   return await res.json();
// };

export default function SpotlightPage({ pieces }) {
  // const { data: pieces, isLoading } = useSWR(URL, fetcher);
  // console.log("data:", pieces);

  // if (isLoading) return <p>Is loading...</p>;

  const randomIndex = Math.floor(Math.random() * pieces.length);
  const spotlightPiece = pieces[randomIndex];

  return (
    <StyledDiv>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
    </StyledDiv>
  );
}

console.log("test:", Spotlight);
