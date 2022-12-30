import React from "react";
import FilmThumbDesktop from "../FilmThumbDesktop";
import "./Property1filmGridDesktop.css";

function Property1filmGridDesktop(props) {
  const {
    sectionTitle,
    className,
    filmThumbDesktop1Props,
    filmThumbDesktop2Props,
    filmThumbDesktop3Props,
    filmThumbDesktop4Props,
    filmThumbDesktop5Props,
    filmThumbDesktop6Props,
    filmThumbDesktop7Props,
    filmThumbDesktop8Props,
    filmThumbDesktop9Props,
    filmThumbDesktop10Props,
    filmThumbDesktop11Props,
    filmThumbDesktop12Props,
  } = props;

  return (
    <div className={`container-films-1-1 ${className || ""}`}>
      <div className="section-title worksans-medium-white-20px">{sectionTitle}</div>
      <div className="flex-row-1">
        <div className="film-thumb-container-1">
          <FilmThumbDesktop src={filmThumbDesktop1Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop2Props.src} />
        </div>
        <div className="film-thumb-container-2">
          <FilmThumbDesktop src={filmThumbDesktop3Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop4Props.src} />
        </div>
        <div className="film-thumb-container-2">
          <FilmThumbDesktop src={filmThumbDesktop5Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop6Props.src} />
        </div>
        <div className="film-thumb-container-2">
          <FilmThumbDesktop src={filmThumbDesktop7Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop8Props.src} />
        </div>
        <div className="film-thumb-container-2">
          <FilmThumbDesktop src={filmThumbDesktop9Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop10Props.src} />
        </div>
        <div className="film-thumb-container-3">
          <FilmThumbDesktop src={filmThumbDesktop11Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop12Props.src} />
        </div>
      </div>
    </div>
  );
}

export default Property1filmGridDesktop;
