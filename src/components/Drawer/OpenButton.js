import React from "react";
import { useState } from "react";

import drawer from "../../styles/Drawer.module.scss";

import Title from "../Title/Title";
import TemporaryDrawer from "./Drawer";

function OpenButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={drawer.button} onClick={() => setIsOpen(!isOpen)}>
        <Title />
      </div>
      <TemporaryDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default OpenButton;
