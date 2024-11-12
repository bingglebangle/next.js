//함수 명은 중요하지 x
// export defualt function 으로 시작
// return 뒤  <h1>에 빨간줄 -> npm run dev 하면 사라짐 (자동으로 TypeScript 를 설치해줌  )

import Link from "next/link";

export const metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  console.log(fetch);
  await new Promise((resolve) => setTimeout(resolve, 1));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
