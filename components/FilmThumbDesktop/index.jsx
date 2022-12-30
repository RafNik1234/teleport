import React from "react";
import "./FilmThumbDesktop.css";

function FilmThumbDesktop(props) {
  const { src } = props;

  return <img className="film-thumb-4" src={src} alt="film-thumb" />;
}

export default FilmThumbDesktop;
