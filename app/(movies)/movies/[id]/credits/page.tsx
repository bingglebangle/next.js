import Credits from "../../../../../components/credits-info";
import styles from "../../../../../style/credits.module.css";
interface IParam {
  params: { id: string };
}

export async function creditAPI(id: string) {
  const API = `https://nomad-movies.nomadcoders.workers.dev/movies/${id}/credits`;
  await new Promise((resolve) => setTimeout(resolve, 1));
  const response = await fetch(API);
  const json = await response.json();
  console.log(json);
  return json;
}

export default async function credits({ params: { id } }: IParam) {
  const credits = await creditAPI(id);
  return (
    <div>
      <h1 className={styles.h1}>Credits</h1>
      <div className={styles.container}>
        {credits.map((credit) => (
          <Credits
            key={credit.id}
            depart={credit.known_for_department}
            name={credit.name}
            img={credit.profile_path}
            character={credit.character}
          />
        ))}
      </div>
    </div>
  );
}
