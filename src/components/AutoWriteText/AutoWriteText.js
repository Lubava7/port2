import React from "react";
import { useState, useEffect } from "react";
import "./AutoWriteText.css";

function AutoWriteText() {
  const [text, setText] = useState("");
  const [fullText] = useState("<p> My projects below  ↓ ↓ ↓  </p>");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText((text) => text + fullText[index]);
        setIndex(index + 1);
      }, 60);
    }
  }, [index]);

  return (
    <div className="all-text">
      <div className="text-inner">
        <span>{text.slice(0, 34)}</span>
      </div>
    </div>
  );
}
export default AutoWriteText;
