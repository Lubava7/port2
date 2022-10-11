import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import drawer from "../../styles/Drawer.module.scss";

import { ReactComponent as EarthSvg } from "../../images/svgIcons/earthSvg.svg";
import { ReactComponent as Astronaut } from "../../images/svgIcons/astronaut.svg";
import { ReactComponent as Email } from "../../images/svgIcons/email.svg";
import { ReactComponent as Game } from "../../images/svgIcons/game.svg";

export default function TemporaryDrawer({ isOpen, setIsOpen }) {
  if (!isOpen) return;
  if (isOpen) {
    return (
      <div>
        <div className={drawer.paper}>
          <section role="presentation">
            <div className={drawer.main_part}>
              <div className={drawer.item}>
                <div className={drawer.icon}>
                  <EarthSvg />
                </div>
                <Link className={drawer.a_link} to="/projects">
                  <p>Projects</p>
                </Link>
              </div>

              <div className={drawer.item}>
                <div className={drawer.icon}>
                  <Astronaut />
                </div>
                <Link className={drawer.a_link} to="/aboutMe">
                  <p>About Me</p>
                </Link>
              </div>

              <div className={drawer.item}>
                <div className={drawer.icon}>
                  <Email />
                </div>
                <Link className={drawer.a_link} to="/contacts">
                  <p>Send Email</p>
                </Link>
              </div>

              <div className={drawer.item}>
                <div className={drawer.icon}>
                  <Game />
                </div>
                <Link className={drawer.a_link} to="/games">
                  <p>Games</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
