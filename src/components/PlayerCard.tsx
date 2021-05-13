import React from "react";

import { usePlayer } from "@/src/context";

import styles from "@/src/styles/Player.module.scss";

const defaultThumbnail =
  "https://github.com/MatheusIshiyama/music-station/blob/main/public/defaultBackground.png?raw=true";

export function PlayerCard() {
  const { songs } = usePlayer();

  return (
    <div className={styles.container}>
      <h2>Music Station</h2>
      <img
        src={songs.length > 0 ? songs[0].thumbnail : defaultThumbnail}
        alt=""
        className={styles.thumbnail}
      />
      <h3>{songs.length > 0 ? songs[0].title : "Nenhuma música tocando"}</h3>
    </div>
  );
}
