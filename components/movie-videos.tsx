import { API_URL } from "../app/(home)/page";
import styles from "../style/movie-video.module.css";

async function getVideo(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
