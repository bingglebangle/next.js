import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-videos";
import { getMovie } from "../../../../components/movie-info";
import Credits from "../../../../components/movie-info-credits";

// async function getMovie(id: string) {
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideo(id: string) {
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

// export default async function MovieDetail({
//   params: { id },
// }: {
//   params: { id: string };
// }) {ß
//   const [movie, videos] = await Promise.all([getMovie(id), getVideo(id)]);

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return { title: movie.title };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        {/**Suspense : 로딩 대기화면 */}
        <MovieInfo id={id} />
      </Suspense>
      <Suspense>
        <Credits id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
