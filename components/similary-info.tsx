import styles from "../style/similary-info.module.css";

export default async function similaryInfo({ img, title, vote_avg, overview }) {
  return (
    <div className={styles.container}>
      <div className={styles.con1}>
        <img src={img} />
        <div className={styles.con2}>
          <p>{title}</p>
          <p>❤️ {vote_avg.toFixed(1)}</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}
