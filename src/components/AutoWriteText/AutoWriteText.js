import React from "react";
import { useState, useEffect } from "react";
import "./AutoWriteText.css";

function AutoWriteText() {
  const [text, setText] = useState("");
  const [fullText] = useState("<p> If u like it , please , contact me </p> ");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 60);
    }
  }, [index]);

  return (
    <div className="all-text">
      <div className="text-inner">
        <span>{text[0]}</span>
        <span>{text[1]}</span>
        <span>{text[2]}</span>
        <span>{text[3]}</span>
        <span>{text[4]}</span>
        <span>{text[5]}</span>
        <span>{text[6]}</span>
        <span>{text[7]}</span>
        <span>{text[8]}</span>
      </div>
      <div className="text-inner">
        <span>{text[9]}</span>
        <span>{text[10]}</span>
        <span>{text[11]}</span>
        <span>{text[12]}</span>
        <span>{text[13]}</span>
        <span>{text[14]}</span>
        <span>{text[15]}</span>
        <span>{text[16]}</span>
        <span>{text[17]}</span>
        <span>{text[18]}</span>
        <span>{text[19]}</span>
        <span>{text[20]}</span>
        <span>{text[21]}</span>
        <span>{text[22]}</span>
        <span>{text[23]}</span>
        <span>{text[24]}</span>
        <span>{text[25]}</span>
        <span>{text[26]}</span>
      </div>
      <div className="text-inner">
        <span>{text[27]}</span>
        <span>{text[28]}</span>
        <span>{text[29]}</span>
        <span>{text[30]}</span>
        <span>{text[31]}</span>
        <span>{text[32]}</span>
        <span>{text[33]}</span>
        <span>{text[34]}</span>
        <span>{text[35]}</span>
        <span>{text[36]}</span>
        <span>{text[37]}</span>
        <span>{text[38]}</span>
        <span>{text[39]}</span>
        <span>{text[40]}</span>
        <span>{text[41]}</span>
        <span>{text[42]}</span>
      </div>
    </div>
  );
}
export default AutoWriteText;
