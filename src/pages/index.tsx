import React, { useState } from "react";

import styles from "@/src/styles/Home.module.scss";

const defaultBackground =
    "https://github.com/MatheusIshiyama/music-station/blob/main/public/defaultBackground.png?raw=true";

export default function Home() {
    const [backgroundUrl, setBackgroundUrl] = useState<string>();

    return (
        <div
            style={{ backgroundImage: `url(${backgroundUrl ? backgroundUrl : defaultBackground})` }}
            className={styles.container}
        ></div>
    );
}
