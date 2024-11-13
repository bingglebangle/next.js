import { API_URL } from "../../../../(home)/page";
import Similary from "../../../../../components/similary-info";

interface IParam {
  params: { id: string };
}

async function similarAPI(id: string) {
  const API = `${API_URL}/${id}/similar`;
  console.log(API);
  const response = await fetch(API);
  const json = await response.json();
  return json;
}

export default async function similar({ params: { id } }: IParam) {
  const similars = await similarAPI(id);
  console.log(similars);
  return (
    <div>
      {similars.map((similar) => (
        <Similary
          key={similar.id}
          img={similar.poster_path}
          title={similar.title}
          vote_avg={similar.vote_average}
          overview={similar.overview}
        />
      ))}
    </div>
  );
}
