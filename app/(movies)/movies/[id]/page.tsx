import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-videos";

// import { API_URL } from "../../../(home)/page";

// async function getMovie(id: string) {
//   console.log(`Fetching movie: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideo(id: string) {
//   console.log(`Fetching  video: ${Date.now()}`);
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

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
