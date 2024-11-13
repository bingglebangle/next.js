"use client";

import { creditAPI } from "../app/(movies)/movies/[id]/credits/page";
import styles from "../style/movie-info-credits.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default async function movieInfoCredits({ id }: { id: string }) {
  const [start, setStart] = useState(0);
  const [credits, setCredits] = useState([]);
  const itemTotal = 6;

  useEffect(() => {
    const fetchCredits = async () => {
      const fetchCredits = await creditAPI(id);
      setCredits(fetchCredits);
    };
    fetchCredits();

    const interval = setInterval(() => {
      setStart((prev) =>
        prev + itemTotal >= credits.length ? 0 : prev + itemTotal
      );
    }, 100000);
    return () => clearInterval(interval);
  }, [credits.length, id]);
  const visibleCredits = credits.slice(start, start + itemTotal);

  return (
    <div className={styles.container}>
      <Link href={`/movies/${id}/credits`}>
        <h1>Credits</h1>
      </Link>
      <div className={styles.con1}>
        {visibleCredits.map((credit) => (
          <div className={styles.con2}>
            <img src={credit.profile_path} />
            <p>{credit.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
