import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching Videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  //  에러 임의 발생
  throw new Error("Something broke...");

  /*const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();*/
}

export default async function MovieVideos({ id }: { id: string }) {
  //  이건 videos에 관한 UI만을 가질거다.
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
