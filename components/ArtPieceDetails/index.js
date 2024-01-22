export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>Künstler: {artist}</p>
      <p>Jahr: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
