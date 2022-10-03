import React from "react";
import { useState, useEffect } from "react";

import mainPage from "../../styles/Main.module.scss";

import header from "../../styles/Header.module.scss";

import TemporaryDrawer from "../../components/Drawer/Drawer";

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
        </div>
      </div>

      <div>
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Main;
