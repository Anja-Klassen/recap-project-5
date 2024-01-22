import Spotlight from "@/components/Sportlight";
import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";
import { StyledDiv } from "@/styles";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

export default function HomePage() {
  const { data: pieces, isLoading } = useSWR(URL, fetcher);
  console.log("data:", pieces);

  if (isLoading) return <p>Is loading...</p>;

  const randomIndex = Math.floor(Math.random() * pieces.length);
  const spotlightPiece = pieces[randomIndex];

  return (
    <StyledDiv>
      <h1>Best Art App Ever</h1>
      <ArtPieces pieces={pieces} />
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
    </StyledDiv>
  );
}

console.log("test:", Spotlight);
