import { getMovie } from "../../../../../components/movie-info";
import styles from "../../../../../style/providers.module.css";
import Providers from "../../../../../components/providers-info";

interface IParam {
  params: { id: string };
}

async function generateMetadata({ params: { id } }: IParam) {
  const movie = await getMovie(id);

  return { title: movie.title };
}

export default async function MovieProviders({ params: { id } }: IParam) {
  const movie = await getMovie(id);
  const providers = await movie.production_companies;

  return (
    <div className={styles.container}>
      {providers.map((provider) => (
        <Providers
          key={provider.id}
          id={provider.id}
          name={provider.name}
          country={provider.origin_country}
          logo={provider.logo_path}
        />
      ))}
    </div>
  );
}
