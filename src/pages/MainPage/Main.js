import React from "react";
// import AutoWriteText from "../../components/AutoWriteText/AutoWriteText";
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

          <div className="base"></div>
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

          <div className="back"></div>
        </div>

        <div className="main-body">
          <Title />
          <div>
            <div>
              <h1>My projects down below</h1>
            </div>
            <div className="projects-part">
              <div className="html-proj">
                <div className="descript">
                  <Link to="/lending">lending</Link>
                </div>
                <img src="" alt="html"></img>
              </div>
              <div className="react-got">
                <div className="descript">
                  <a href="https://lubava7.github.io/react-got/">react got</a>
                </div>
                <img src="" alt="html"></img>
              </div>
              <div className="zakaz">
                <div className="descript">
                  <a href="https://lubava7.github.io/dmitry-zakaz/">zakaz</a>
                </div>
                <img src="" alt="html"></img>
              </div>
              <div className="leadHit">
                <div className="descript">
                  <a href="https://lubava7.github.io/vue-test-task-LeadHit/">
                    leadHit
                  </a>
                </div>
                <img src="" alt="html"></img>
              </div>
              <div className="jasmine">
                <div className="descript">
                  <a href="https://lubava7.github.io/lend/">jasmine</a>
                </div>
                <img src="" alt="html"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
