import GlobalStyle from "../styles";
import useSWR from "swr";
import { StyledDiv } from "../styles";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = async (url) => {
  const res = await fetch(url);
  return await res.json();
};
export default function App({ Component, pageProps }) {
  const { data: pieces, isLoading } = useSWR(URL, fetcher);
  if (isLoading) return <p>Is loading...</p>;
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
