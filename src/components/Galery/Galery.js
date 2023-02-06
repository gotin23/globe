import React from "react";
import { useState } from "react";

import "./Galery.css";

export default function Galery({ state }) {
  const [toogleGaleryFullScreen, setToogleGaleryFullScreen] = useState(false);
  const [tooglePicFullScreen, setTooglePicFullScreen] = useState();
  const handleFullScreen = (pic) => {
    setTooglePicFullScreen(pic);
    setToogleGaleryFullScreen(!toogleGaleryFullScreen);
  };

  return (
    <>
      <div className={`container-galery ${state.animBounce}`}>
        <img
          onClick={() => handleFullScreen(state.pics[0])}
          src={state.pics[0]}
          alt={`Photo of ${state.pics[0]}`}
        />
        <img
          onClick={() => handleFullScreen(state.pics[1])}
          src={state.pics[1]}
          alt={`${state.pics[0]}`}
        />
      </div>
      {toogleGaleryFullScreen && (
        <div className="container-galery-full-screen">
          <p
            onClick={handleFullScreen}
            className="btn-close-galery-full-screen"
          >
            X
          </p>
          <img
            className="img-full-screen"
            src={tooglePicFullScreen}
            alt={toogleGaleryFullScreen}
          />
        </div>
      )}
    </>
  );
}
