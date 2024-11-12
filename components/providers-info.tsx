import styles from "../style/providers-info.module.css";

interface IProviders {
  id: string;
  country: string;
  logo: string;
  name: string;
}

export default async function providers({
  id,
  name,
  country,
  logo,
}: IProviders) {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <p>Provider name : {name}</p>
      <p>country : {country}</p>
    </div>
  );
}
