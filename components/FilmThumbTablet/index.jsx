import React from "react";
import "./FilmThumbTablet.css";

function FilmThumbTablet(props) {
  const { src, className } = props;

  return <img className={`film-thumb-5 ${className || ""}`} src={src} alt="film-thumb" />;
}

export default FilmThumbTablet;
