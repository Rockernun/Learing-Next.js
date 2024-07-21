import { API_URL } from "../../../(home)/page";

export const metadata = {
  title: "Movie Page",
};

async function getMovie(id: string) {
  console.log(`Fetching Movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching Videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("Start fetching...");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("End fetching...");
  return <h1>{movie.title}</h1>;
}
