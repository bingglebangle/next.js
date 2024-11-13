import styles from "../style/credits-info.module.css";

interface ICredits {
  budget: number;
  revenue: number;
}

export default async function creditInfo({ depart, name, img, character }) {
  return (
    <div>
      <a href={`https://www.google.com/search?q=${name}`}>
        <div className={styles.container}>
          <img src={img} />
          <div className={styles.con}>
            <p className={styles.name}> {name}</p>
            <p>{character}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
