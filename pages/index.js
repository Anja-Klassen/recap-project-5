import ArtPieces from "/Users/anjaklassenankla/webdev/sessions/art-gallery-app/components/ArtPieces/index.js";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

export default function HomePage() {
  const { data: pieces, isLoading } = useSWR(URL, fetcher);
  console.log("data:", pieces);

  if (isLoading) return <p>Is loading...</p>;

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
