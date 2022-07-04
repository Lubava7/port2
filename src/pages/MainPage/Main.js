import React from "react";
import AutoWriteText from "../../components/AutoWriteText/AutoWriteText";
import "./Main.css";
import "../../components/Header/Header.css";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";

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
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>

          <div className="base">
            {/* <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div> */}
          </div>
        </div>
        <div className="second-block">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>

          <div className="back">
            {/* <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div> */}
          </div>
        </div>

        <section className="main-body ">
          <Title />
          <div>
            <div>
              <AutoWriteText />
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here ALL component add here ALL component add
              here ALL component add here ALL component add here ALL component
              add here ALL component add here ALL component add here ALL
              component add here ALL component add here ALL component add here
              ALL component add here here
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
