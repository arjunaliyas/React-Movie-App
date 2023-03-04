import React, { useState, useEffect } from "react";
import './Trending.css'
import axios from "axios";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination"

function Trending() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=d96af3101407b8c3500a87ac7539ee47&&page=${page}`
    );
    // console.log(data.results);

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="PageTitle">Trending</span>
      <div className="trending">
        {content && content.map((item) => (
          <SingleContent  
            key={item.id}
            id={item.id}
            poster={item.poster_path}
            title={item.title || item.name}
            date={item.first_air_date || item.release_date}
            mediaType={item.media_type}
            voteAverage={item.vote_average}
          />
        ))}
      </div>
      <CustomPagination setPage={setPage}   />
    </div>
  );
}

export default Trending;
