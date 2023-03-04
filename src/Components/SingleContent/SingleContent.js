import React from "react";
import { Badge } from "@mui/material";
import "./SingleContent.css";
import { img_300, unavailable } from "../../Config/Config";

const SingleContent = ({ id, title, date, poster, mediaType, voteAverage }) => {
  return (
    <div className="media"   id={id}>
      <Badge
        badgeContent={voteAverage}
        color={voteAverage > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt=""
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {mediaType === "tv" ? "TV Series" : "Movie"}
        <span className="subTitile">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
