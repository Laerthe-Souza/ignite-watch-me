import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { useCallback } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleSelectGenre = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        selectedGenreId={selectedGenreId}
        handleSelectGenre={handleSelectGenre}
      />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}