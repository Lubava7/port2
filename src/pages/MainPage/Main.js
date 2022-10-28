import React from "react";
import { useEffect, useState } from "react";

import main from "../../styles/Main.module.scss";
import OpenButton from "../../components/Drawer/OpenButton";
import Background from "../../components/Background/Background";

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
  function now() {
    return new Date();
  }
  const currentDateTime = new Date();
  const timeText = currentDateTime.toLocaleTimeString("en-US");

  return (
    <div className={main.main}>
      <div className={main.time}>{Clock()}</div>
      <Background />
      <OpenButton />
      <section className={main.greet}>
        <div>
          <h1>Hi</h1>
          <p>
            I 'm Lyubava <br /> Frontend Developer
          </p>
        </div>
      </section>
      <section className={main.contact}>
        <div>
          <h1>Want to Contact Me?</h1>
          <p>
            Send me an Email <br />
            or <br /> My phone number: +7(977)325-53-35
          </p>
        </div>
      </section>
    </div>
  );
}

export default Main;
