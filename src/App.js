// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDeatails'
import { searchMovies } from './api';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const result = await searchMovies(query);
    setMovies(result.Search);
  };

  return (
    <div className="app">
      <h1>Movie Search Engine</h1>
      <Routes>
	  <Route path='/'
	  element = {
		<>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} /> 
	  </>
	  }
	  />
      <Route path="/movie/:id" element={<MovieDetail />}/>
      </Routes>
    </div>
  );
};

export default App;
