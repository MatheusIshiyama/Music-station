import { createContext, useContext, useState } from "react";

import { Song, PlayerContextData, PlayerContextProviderProps } from "@/src/interfaces";

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [songs, setSongs] = useState<Song[]>([]);

    function addSong(song: Song): void {}

    function removeSong(id: string): void {}

    return (
        <PlayerContext.Provider value={{ songs, addSong, removeSong }}>
            {children}
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => useContext(PlayerContext);
