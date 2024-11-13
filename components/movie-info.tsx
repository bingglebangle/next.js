import { API_URL } from "../app/(home)/page";
import styles from "../style/movie-info.module.css";
import Link from "next/link";

export async function getMovie(id: string) {
  //  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.poster_path}
        className={styles.poster}
      />

      <div className={styles.info}>
        <a href={movie.hompage} target={"_blank"}>
          HomePage &rarr;
        </a>
        <h2 className={styles.title}>{movie.title}</h2>

        <h2>🗳️{movie.vote_average.toFixed(1)}</h2>

        <p>{movie.overview}</p>

        <Link href={`/movies/${id}/providers`}>
          <h2>Providers </h2>
        </Link>
      </div>
    </div>
  );
}
