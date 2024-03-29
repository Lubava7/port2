import React from "react";
import "./Landing.css";
import Text1 from "../../LendingText/Text1";
import Text2 from "../../LendingText/Text2";
import Text3 from "../../LendingText/Text3";
import Text4 from "../../LendingText/Text4";
import Text5 from "../../LendingText/Text5";

function Lending() {
  return (
    <div className="main-div">
      <section id="top" className="header-section">
        <p className="rotate-text">&copy; Example 2022</p>
        <div className="all-cubes">
          <div className="cube1">HTML markup example part</div>
          <div className="cube2">
            <img
              src="https://github.com/Lubava7/port2/blob/master/src/images/img/CssMark.png?raw=true"
              alt="CSS"
            />
          </div>
          <div className="cube3">
            <img
              src="https://github.com/Lubava7/port2/blob/master/src/images/img/HtmlMark.png?raw=true"
              alt="HTML"
            />
          </div>
          <div className="cube4">
            <img
              src="https://github.com/Lubava7/port2/blob/master/src/images/img/JSmark.png?raw=true"
              alt="JS"
            />
          </div>
        </div>
      </section>
      <section className="body-section">
        <div id="peach" className="div-photo-section">
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/peach.png?raw=true"
            alt="peach"
          />
          <div>
            <p className="title">Peaches</p>
            <Text1 />
          </div>
        </div>
        <div id="pinkFlower" className="div-photo-section-reverse">
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/pinkFlower.png?raw=true"
            alt="pinkFlower"
          />
          <div>
            <p className="title">Pink Flower</p>
            <Text2 />
          </div>
        </div>
        <div className="middle-img">
          <p>
            Success does not consist in never making mistakes but in never
            making the same one a second time. ( George Bernard Shaw )
          </p>
        </div>
        <div id="kebab" className="div-photo-section">
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/porkKebab.png?raw=true"
            alt="porkKebab"
          />
          <div>
            <p className="title">Pork Kebab</p>
            <Text3 />
          </div>
        </div>
        <div id="spruce" className="div-photo-section-reverse">
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/spruce.png?raw=true"
            alt="spruce"
          />
          <div>
            <p className="title">Spruce</p>
            <Text4 />
          </div>
        </div>
        <div id="yellowFlower" className="div-photo-section">
          <img
            src="https://github.com/Lubava7/port2/blob/master/src/images/img/yellowFlower.png?raw=true"
            alt="yellowFlower"
          />
          <div>
            <p className="title">Yellow Flower</p>
            <Text5 />
          </div>
        </div>
      </section>
      <section className="footer-section">
        <div>
          <p>&copy; 2022 Lubava Example Page</p>
          <div className="github">
            <a href="https://github.com/Lubava7">
              <img
                src="https://github.com/Lubava7/port2/blob/master/src/images/img/github.png?raw=true"
                alt="GitHub"
              />
              GitHub
            </a>
          </div>
        </div>
        <div></div>
        <div>
          <a href="#top">Page Up</a>
          <p>or</p>
          <a href="#kebab">Back to Delicious Kebab</a>
        </div>
      </section>
    </div>
  );
}

export default Lending;
