import axios from "axios";
import React, { useEffect } from "react";
import { Chip } from "@mui/material";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (item) => {
    setSelectedGenres([...selectedGenres, item]);
    setGenres(genres.filter((gItem) => gItem.id !== item.id));
    setPage(1);
  };
  const handleRemove = (item) => {
    setSelectedGenres(selectedGenres.filter((gItem) => gItem.id !== item.id));
    setGenres([...genres, item]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=d96af3101407b8c3500a87ac7539ee47&language=en-US`
    );
    setGenres(data.genres);
  };

  console.log(genres);

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((item) => (
          <Chip
            label={item.name}
            key={item.id}
            style={{ backgroundColor: "blue",color:"white", margin: 2 }}
            
            color="primary"
            variant="outlined"
            clickable
            onDelete={()=>handleRemove(item)}
          />
        ))}
      {genres &&
        genres.map((item) => (
          <Chip
            label={item.name}
            key={item.id}
            style={{ backgroundColor: "white", margin: 2 }}
            
            variant="outlined"
            clickable
            onClick={() => handleAdd(item)}
          />
        ))}
    </div>
  );
};

export default Genres;
