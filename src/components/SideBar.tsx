import { useEffect, useState } from "react";

import { api } from "../services/api";
import { Button } from "./Button";

import '../styles/sidebar.scss';

export type GenreResponseProps = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

type SideBarProps = {
  selectedGenreId: number;
  handleSelectGenre: (id: number) => void;
}

export function SideBar({ selectedGenreId, handleSelectGenre }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  return (
    <aside>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleSelectGenre(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </aside>
  );
}