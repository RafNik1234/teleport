import React from "react";
import "./FilmThumbMobile.css";

function FilmThumbMobile(props) {
  const { src, className } = props;

  return <img className={`film-thumb-3 ${className || ""}`} src={src} alt="film-thumb" />;
}

export default FilmThumbMobile;
