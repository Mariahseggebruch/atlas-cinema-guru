import React, { useState } from 'react';
import Filters from './Filters';
import MoviesList from './MoviesList';
import { Title } from '@/lib/definitions';

const HomePage = () => {
  // Example data and state for demonstration purposes
  const [searchTerm, setSearchTerm] = useState('');
  const [minYear, setMinYear] = useState<number | undefined>(undefined);
  const [maxYear, setMaxYear] = useState<number | undefined>(undefined);
  const [genres, setGenres] = useState<string[]>([]);
  const allGenres = ['Action', 'Comedy', 'Drama', 'Horror'];
  return (
    <main className="flex-col px-5 w-full">
    <div className="w-full flex flex-col "> 
        <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        genres={genres}
        setGenres={setGenres}
        allGenres={allGenres} 
      />
      <MoviesList
          paginatedMovies={paginatedMovies}
          favorites={favorites}
          watchLater={watchLater}
          onFavoriteToggle={toggleFavorite}
          onWatchLaterToggle={toggleWatchLater}
        />
    </div>
    </main>
  );
};

export default HomePage;
