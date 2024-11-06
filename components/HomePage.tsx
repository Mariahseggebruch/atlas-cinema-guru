import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import MoviesList from './MoviesList';
import Pagination from './Pagination';
import { Title } from '@/lib/definitions';

const HomePage: React.FC = () => {
  const [paginatedMovies, setPaginatedMovies] = useState<Title[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [watchLater, setWatchLater] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const [searchTerm, setSearchTerm] = useState('');
  const [minYear, setMinYear] = useState<number | undefined>(undefined);
  const [maxYear, setMaxYear] = useState<number | undefined>(undefined);
  const [genres, setGenres] = useState<string[]>([]);
  const allGenres = ['Action', 'Comedy', 'Drama', 'Horror'];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`/api/titles?page=${currentPage}&limit=${moviesPerPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPaginatedMovies(data.title);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, [currentPage, moviesPerPage]); // Depend on currentPage and moviesPerPage

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const toggleWatchLater = (id: string) => {
    setWatchLater((prev) =>
      prev.includes(id) ? prev.filter((watch) => watch !== id) : [...prev, id]
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex-col px-5 w-full">
      <div className="w-full flex flex-col">
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
        <Pagination
          currentPage={currentPage}
          totalMovies={100}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default HomePage;
