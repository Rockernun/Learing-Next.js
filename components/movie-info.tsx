import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching Movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  //  이건 movie에 관한 UI만을 가질거다.
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
