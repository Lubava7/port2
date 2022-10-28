import React from "react";
import { Link } from "react-router-dom";

import project from "../../styles/Projects.module.scss";
import OpenButton from "../../components/Drawer/OpenButton";
import Background from "../../components/Background/Background";

function Projects() {
  return (
    <div className={project.main}>
      <Background />
      <OpenButton />
      <section className={project.projects}>
        <div>
          <Link to="/landing">
            <h1>Landing</h1>
          </Link>
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/prevHTML.png?raw=true"
            alt="html"
          />
        </div>

        <div>
          <a href="https://lubava7.github.io/dmitry-zakaz/">
            <h1>Markup on Figma Layout</h1>
          </a>
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/dmitry.png?raw=true"
            alt="html"
          />
        </div>

        <div>
          <a href="https://lubava7.github.io/vue-test-task-LeadHit/">
            <h1>VueCLI-App</h1>
          </a>
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/leadhit.png?raw=true"
            alt="html"
          />
        </div>

        <div>
          <a href="https://lubava7.github.io/lend/">
            <h1>Markup on Figma Layout</h1>
          </a>
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/jasmine.png?raw=true"
            alt="html"
          />
        </div>

        <div>
          <a href="https://lubava7.github.io/react-todo-new/">
            <h1>Todo List React-app</h1>
          </a>
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/todoNew.png?raw=true"
            alt="todo"
          />
        </div>

        <div>
          <a href="https://lubava7.github.io/react-booklist/">
            <h1>Book List React-app</h1>
          </a>
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/booklist.png?raw=true"
            alt="booklist"
          />
        </div>

        <div>
          <a href="https://lubava7.github.io/google-page/">
            <h1>My first HTML-markup</h1>
          </a>
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/googlepage.jpg?raw=true"
            alt="google"
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;
