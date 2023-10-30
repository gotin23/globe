import React from "react";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import globeLogo from "../../Assets/logoEarth/globeLogo.svg";
import "./World.css";
import CityStats from "../../components/CityStats/CityStats";
import Stats2 from "../Stats2/Stats2";
import Stats3 from "../Stats3/Stats3";
import Stats4 from "../Stats4/Stats4";
import DescriptionCity from "../DescriptionCity/DescriptionCity";
import Galery from "../Galery/Galery";
import Weather from "../Weather/Weather";
import CityTime from "../CityTime/CityTime";
import dataCity from "../CityData/CityData";

export default function World() {
  const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;
  console.log(dataCity);
  const [toogleInfo, setToogleInfo] = useState(false);
  const [toogleDownBar, setDownBar] = useState(false);
  const [toogleAnimDownBar, setAnimDownBar] = useState(true);
  const [toogleAnimClass, setToogleAnimClass] = useState(false);
  const [largeur, setlargeur] = useState(window.innerWidth);
  const [globeStyle, setGlobeStyle] = useState("//unpkg.com/three-globe/example/img/earth-night.jpg");

  const [modalInfo, setModalInfo] = useState([{ lng: "", lat: "", popu: "" }]);
  const globeEl = useRef();
  const animationBounceStats = toogleAnimClass ? "bounceInLeft" : "bounceOutLeft";
  const animationBounceDescription = toogleAnimClass ? "bounceInRight" : "bounceOutRight";
  const animationBounceDownBar = toogleAnimDownBar ? "bounceInUp" : "bounceOutDown";

  useEffect(() => {
    //   // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

    globeEl.current.pointOfView({ altitude: 3.5 }, 5000);
  }, []);
  const handleClickOnGlobe = (d) => {
    setModalInfo([
      {
        lat: d.lat,
        lng: d.lng,
        city: d.city,
        popu: d.popu,
        description: d.description,
        evolutionPop: d.evolutionPop,
        ageOfPop: d.ageOfPop,
        percentageOfPoor: d.percentageOfPoor,
        pics: d.pics,
      },
    ]);
    setToogleAnimClass(!toogleAnimClass);
    setToogleInfo(!toogleInfo);
  };

  // const showToolsDownBar = (e) => {
  //   const heightScreen = window.innerHeight;
  //   const h = heightScreen - 80;

  //   // if(e.clientY >= h){
  //   //   setDownBar(true)
  //   //    console.log(toogleDownBar)
  //   // }
  //   if (e.clientY !== undefined) {
  //     console.log("1");
  //     setDownBar(true);
  //   }
  //   if (e.clientY < h + 20) {
  //     setDownBar(false);
  //   }
  // };

  return (
    <div className="home-container">
      <div
        className="nav-bar"
        style={{
          background: "black",
          color: "white",
          height: "80px",
          width: "100%",
          position: "absolute",
          zIndex: "20",
          textAlign: "center",
        }}
      >
        {toogleInfo && (
          <p onClick={() => setToogleAnimClass(false) + setTimeout(() => setToogleInfo(false), 800)} className="close-modal-info glass-button">
            Close
          </p>
        )}

        {toogleInfo && <h1>{modalInfo[0].city}</h1>}
      </div>

      <Globe
        ref={globeEl}
        globeImageUrl={globeStyle}
        backgroundColor={"rgb(37, 11, 90)"}
        showAtmosphere={true}
        atmosphereColor={"rgba(228, 188, 26, 0.561)"}
        backgroundImageUrl={"//unpkg.com/three-globe/example/img/night-sky.png"}
        htmlElementsData={dataCity}
        htmlElement={(d) => {
          const el = document.createElement("div");

          el.innerHTML = markerSvg + `<p>${d.city}</p>`;

          el.style.color = "rgb(228, 187, 26)";
          el.style.width = `${d.size}px`;
          el.style.fontSize = "16px";
          el.style.fontFamily = "sans-serif";

          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => handleClickOnGlobe(d);

          return el;
        }}
      />
      {/* affichage des infos grand ecran */}
      <div className="stats-container">
        {toogleInfo && largeur > 600 && (
          <CityStats
            state={{
              animBounce: animationBounceStats,
              city: modalInfo[0].city,
              popu: modalInfo[0].popu,
            }}
          />
        )}
        {toogleInfo && largeur > 600 && (
          <Stats2
            state={{
              animBounce: animationBounceStats,
              percentageOfPoor: modalInfo[0].percentageOfPoor,
            }}
          />
        )}
        {toogleInfo && largeur > 600 && (
          <Stats3
            state={{
              animBounce: animationBounceStats,
              ageOfPop: modalInfo[0].ageOfPop,
            }}
          />
        )}
        {toogleInfo && largeur > 600 && (
          <Stats4
            state={{
              animBounce: animationBounceStats,
              evolutionPop: modalInfo[0].evolutionPop,
            }}
          />
        )}
      </div>
      <div className="description-container">
        <div className={`container-time-meteo ${animationBounceDescription}`}>
          {toogleInfo && largeur > 600 && (
            <CityTime
              state={{
                city: modalInfo[0].city,
                lat: modalInfo[0].lat,
                lng: modalInfo[0].lng,
              }}
            />
          )}
          {toogleInfo && largeur > 600 && <Weather state={{ city: modalInfo[0].city }} />}
        </div>

        {toogleInfo && largeur > 600 && (
          <DescriptionCity
            state={{
              description: modalInfo[0].description,
              animBounce: animationBounceDescription,
            }}
          />
        )}
        {toogleInfo && largeur > 600 && (
          <Galery
            state={{
              animBounce: animationBounceDescription,
              pics: modalInfo[0].pics,
            }}
          />
        )}
      </div>
      {/* afichage des infos portable */}
      {toogleInfo && largeur < 600 && (
        <div className="container-small-sreen">
          <div className={`container-time-meteo ${animationBounceDescription}`}>
            <CityTime
              state={{
                city: modalInfo[0].city,
                lat: modalInfo[0].lat,
                lng: modalInfo[0].lng,
              }}
            />
            <Weather state={{ city: modalInfo[0].city }} />
          </div>
          <DescriptionCity
            state={{
              description: modalInfo[0].description,
              animBounce: animationBounceDescription,
            }}
          />
          <Galery state={{ animBounce: animationBounceDescription }} />
          <CityStats
            state={{
              animBounce: animationBounceStats,
              city: modalInfo[0].city,
              popu: modalInfo[0].popu,
            }}
          />
          <Stats2 state={{ animBounce: animationBounceStats }} />
          <Stats3 state={{ animBounce: animationBounceStats }} />
          <Stats4 state={{ animBounce: animationBounceStats }} />
        </div>
      )}
      {/* bar noir du bas de la page*/}
      <div className="black-down-bar">
        <div className={`btn-color-globe ${animationBounceDownBar}`} onClick={() => setGlobeStyle("//unpkg.com/three-globe/example/img/earth-night.jpg")}>
          <img className="svg" src={globeLogo} />
          <p>Night</p>
        </div>

        <div className={`btn-color-globe ${animationBounceDownBar}`} onClick={() => setGlobeStyle("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")}>
          <img src={globeLogo} />
          <p>Day</p>
        </div>

        <div className={`btn-color-globe ${animationBounceDownBar}`} onClick={() => setGlobeStyle("//unpkg.com/three-globe/example/img/earth-dark.jpg")}>
          <img src={globeLogo} />
          <p>Dark</p>
        </div>
      </div>
    </div>
  );
}
