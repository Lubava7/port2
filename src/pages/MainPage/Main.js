import React from "react";
import { useState, useEffect } from "react";
import "./Main.css";
import "../../components/Header/Header.css";

import Player from "../../components/Player/Player";

import { soundData } from "../../components/Player/audio";

function Main() {
  const [songs, setSongs] = useState(soundData);

  const [currentSong, setCurrentSong] = useState(0);
  const [nextSong, setNextSong] = useState(currentSong + 1);

  useEffect(() => {
    setNextSong(() => {
      if (currentSong + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSong + 1;
      }
    });
  }, [songs, currentSong]);

  return (
    <div>
      <div className="main-header">
        <div className="first-block">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>

          <div className="base">
            <img
              className="sputnic"
              src="https://github.com/Lubava7/port2/blob/master/public/images/transparentPng/sputnic.png?raw=true"
              alt="sputnic"
            />
          </div>
          <img
            className="rocket"
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/R-7_prototipo.svg"
            alt="rocket"
          />
        </div>

        <div className="second-block"></div>

        <div className="main-body">
          <div className="endurance-div">
            <img
              className="endurance"
              src="https://i.imgur.com/8vwY40V.png"
              alt="endurance"
            />
          </div>

          <Player
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            nextSong={nextSong}
            songs={songs}
            // song={songs[currentSong]} nextSong={songs[nextSong]}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
