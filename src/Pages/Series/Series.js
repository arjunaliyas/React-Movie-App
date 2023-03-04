import axios from "axios";
import React, { useState, useEffect } from "react";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import Genres from "../../Components/Genres/Genres"
import useGenre from '../../hooks/useGenre'

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async() => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=d96af3101407b8c3500a87ac7539ee47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL} &with_watch_monetization_types=flatrate`
      );
      // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    
    setContent(data.results);
    setNumOfPages(data.total_pages);
    console.log(data);
  };

  console.log(genreforURL);
  useEffect(() => {
    fetchMovies();
  }, [page,genreforURL]);

  return (
    <div>
      <span className="PageTitle">Movies</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              mediaType="tv"
              voteAverage={item.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
