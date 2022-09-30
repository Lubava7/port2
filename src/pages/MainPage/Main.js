import React from "react";
import "./Main.css";
import "../../components/Header/Header.css";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";

// import TemporaryDrawer from "../../components/Drawer/Drawer";

import VirtualSky from "react-virtual-sky";

function Star() {
  const config = {
    projection: "lambert",
    azOff: 0,
    height: 800,
    width: 800,
    latitude: 51.746449,
    longitude: 19.620693,
    time: new Date(),
    visibility: {
      starMag: 6,
      showConstellations: true,
      showEcliptic: true,
    },
  };
  return (
    <div className="App">
      <VirtualSky id="startmap" config={config} />
    </div>
  );
}

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
        </div>

        <div className="second-block"></div>
        {/* <div className="star-block">{Star()}</div> */}

        <div className="main-body">
          {/* <Title /> */}
          {/* <TemporaryDrawer /> */}
          <div>
            <div>{/* <h1>My projects down below</h1> */}</div>
            {/* <div className="projects-part">
              <div className="projCart">
                <div className="descript">
                  <Link to="/lending">
                    <h1>Landing</h1>
                  </Link>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/prevHTML.png?raw=true"
                  alt="html"
                ></img>
              </div>
              <div className="projCart">
                <div className="descript">
                  <a href="https://lubava7.github.io/react-got/">
                    <h1>React-App GOT</h1>
                  </a>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/GOT.png?raw=true"
                  alt="html"
                ></img>
              </div>
              <div className="projCart">
                <div className="descript">
                  <a href="https://lubava7.github.io/dmitry-zakaz/">
                    <h1>Markup on Figma Layout</h1>
                  </a>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/dmitry.png?raw=true"
                  alt="html"
                ></img>
              </div>
              <div className="projCart">
                <div className="descript">
                  <a href="https://lubava7.github.io/vue-test-task-LeadHit/">
                    <h1>VueCLI-App</h1>
                  </a>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/leadhit.png?raw=true"
                  alt="html"
                ></img>
              </div>
              <div className="projCart">
                <div className="descript">
                  <a href="https://lubava7.github.io/lend/">
                    <h1>Markup on Figma Layout</h1>
                  </a>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/jasmine.png?raw=true"
                  alt="html"
                ></img>
              </div>
              <div className="projCart">
                <div className="descript">
                  <a href="https://lubava7.github.io/react-todo-new/">
                    <h1>Todo List React-app</h1>
                  </a>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/todoNew.png?raw=true"
                  alt="todo"
                ></img>
              </div>
              <div className="projCart">
                <div className="descript">
                  <a href="https://lubava7.github.io/react-booklist/">
                    <h1>Book List React-app</h1>
                  </a>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/booklist.png?raw=true"
                  alt="booklist"
                ></img>
              </div>
              <div className="projCart">
                <div className="descript">
                  <a href="https://lubava7.github.io/google-page/">
                    <h1>My first HTML-markup</h1>
                  </a>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/googlepage.jpg?raw=true"
                  alt="google"
                ></img>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
