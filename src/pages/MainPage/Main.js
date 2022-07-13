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
                  alt="todo"
                ></img>
              </div>
              <div className="projCart">
                <div className="descript">
                  <a href="https://lubava7.github.io/google-page/">
                    <h1>My first HTML-markup</h1>
                  </a>
                </div>
                <img
                  src="https://github.com/Lubava7/port2/blob/master/public/images/booklist.png?raw=true"
                  alt="todo"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
