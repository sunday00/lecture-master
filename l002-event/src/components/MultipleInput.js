import React, { useState } from "react";

const MultipleInput = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  let refInput;

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });

    console.log(refInput.value);
  };

  return (
    <div>
      <input type="text" name="name" onChange={handleChange} />
      <input
        type="text"
        name="age"
        onChange={handleChange}
        ref={(ref) => {
          refInput = ref;
        }}
      />
      <p>
        {person.name} : {person.age}
      </p>
    </div>
  );
};

export default MultipleInput;
