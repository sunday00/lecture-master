import React from "react";

const GoDownButton = () => {
  let boxRef;

  const goDown = (e) => {
    boxRef.scrollTop = boxRef.scrollHeight - boxRef.clientHeight;
  };

  return (
    <>
      <article
        style={{ height: "300px", overflow: "auto" }}
        ref={(ref) => {
          boxRef = ref;
        }}
      >
        <div
          style={{
            height: "600px",
            background: "linear-gradient(white, black)",
          }}
        ></div>
      </article>
      <button onClick={goDown}>Go down</button>
    </>
  );
};

export default GoDownButton;
