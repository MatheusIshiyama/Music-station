import React, { useEffect, useState } from "react";

import styles from "@/src/styles/Home.module.scss";

import { PlayerCard } from "../components";
import { usePlayer } from "@/src/context";

const defaultBackground =
    "https://github.com/MatheusIshiyama/music-station/blob/main/public/defaultBackground.png?raw=true";

export default function Home() {
    const [backgroundUrl, setBackgroundUrl] = useState<string>(null);
    const { songs, addSong, removeSong } = usePlayer();

    useEffect(() => {
        if (songs.length > 0) {
            setBackgroundUrl(songs[0].thumbnail);
        } else {
            setBackgroundUrl(null);
        }
    }, [songs]);

    return (
        <div
            style={{ backgroundImage: `url(${backgroundUrl ? backgroundUrl : defaultBackground})` }}
            className={styles.container}
        >
            <div className={styles.player}>
                <PlayerCard />
            </div>
        </div>
    );
}
