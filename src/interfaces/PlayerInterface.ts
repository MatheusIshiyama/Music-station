import { ReactNode } from "react";

export interface Song {
    id: string;
    title: string;
    thumbnail: string;
}

export interface PlayerContextData {
    songs: Song[];
    addSong: (song: Song) => void;
    removeSong: (id: string) => void;
}

export interface PlayerContextProviderProps {
    children: ReactNode;
}
