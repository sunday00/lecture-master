import React, { useRef, useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");

  const inputRef = useRef();

  function onChange(e) {
    // console.log(e);
    setMessage(e.target.value);
  }

  function onConsole(e) {
    console.log(`%c${message}`, "color:magenta;");
    setMessage("");
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>EventPractice</h1>
      <input
        type="text"
        name="message"
        placeholder="input something"
        onChange={onChange}
        onKeyDown={(e) => {
          e.key === "Enter" && onConsole(e);
        }}
        value={message}
        ref={inputRef}
      />
      <button onClick={onConsole}>console log</button>
    </div>
  );
};

export default EventPractice;
