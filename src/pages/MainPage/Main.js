import React from "react";
import "./Main.css";
import "../../components/Header/Header.css";

function Main() {
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
          {/* <audio
            controls
            src="https://github.com/Lubava7/port2/blob/master/public/music/Hans_Zimmer_Requiem_for_a_dream.mp3"
          ></audio> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
