import Link from "next/link";
import styled from "styled-components";

const StyledLayout = styled.nav`
  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }

  padding: 30px;
  background-color: grey;
  display: flex;
  justify-content: space-around;
  font-size: 25px;
`;

export default function NavigationBar() {
  return (
    <>
      <StyledLayout>
        <Link href="/">Spotlight</Link>
        <Link href="/art-pieces">Art Pieces</Link>
      </StyledLayout>
    </>
  );
}
