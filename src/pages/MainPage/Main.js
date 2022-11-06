import React from "react";
import { useEffect, useState } from "react";

import main from "../../styles/Main.module.scss";
import OpenButton from "../../components/Drawer/OpenButton";
import Background from "../../components/Background/Background";

import { Icon } from "@iconify/react";

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <span>{date.toLocaleTimeString()}</span>;
}

function Main() {
  return (
    <div className={main.main}>
      <div className={main.time}>{Clock()}</div>
      <Background />
      <OpenButton />
      <section className={main.greet}>
        <div className={main.text}>
          <h1>Frontend Developer</h1>
          <p>
            Lyubava Kanivetc
            <br />
          </p>
        </div>
        <div className={main.photo_me}></div>
      </section>
      <section className={main.contact}>
        <div>
          <h1>Want to Contact Me?</h1>
          <p>
            <a href="https://t.me/URCHNG">
              Write me
              <span>
                <Icon icon="logos:telegram" />
              </span>
            </a>
            <br />
            or <br /> Call me +7(977)325-53-35
          </p>
        </div>
      </section>
    </div>
  );
}

export default Main;
