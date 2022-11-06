import React from "react";
import about from "../../styles/AboutMe.module.scss";

// https://hh.ru/applicant/resumes/view?resume=d5f45eb6ff08d8d9930039ed1f69654b635352
// https://lubava7.github.io/port2/
import OpenButton from "../../components/Drawer/OpenButton";

function AboutMe() {
  return (
    <div className={about.main}>
      <OpenButton />
      <div className={about.abt_me}>
        <a href="https://hh.ru/applicant/resumes/view?resume=d5f45eb6ff08d8d9930039ed1f69654b635352">
          мое резюме
        </a>
        text abt me
      </div>
    </div>
  );
}

export default AboutMe;
