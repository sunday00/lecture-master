import React, { useState, useEffect } from "react";

const Clearable = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={(e) => {
          setVisible(!visible);
        }}
      >
        {visible ? "visible" : "hidden"}
      </button>
      {visible && <Inputs></Inputs>}
    </div>
  );
};

export default Clearable;

function Inputs() {
  const [name, setName] = useState("sunday00");
  const [nick, setNick] = useState("joker");

  useEffect(() => {
    console.log("Rendered");
    console.log(name, nick);
    return () => {
      console.log("cleared");
      console.log(name, nick);
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="nick"
        value={nick}
        onChange={(e) => setNick(e.target.value)}
      />
    </div>
  );
}
