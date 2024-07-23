import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          HomePage &rarr;
        </a>
      </div>
    </div>
  );
}
