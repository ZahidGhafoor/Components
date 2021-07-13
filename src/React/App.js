import React, { useState } from "react";

const App = () => {
  const [FullName, useFullName] = useState({
    fName: "",
    lName: "",
    Email: "",
    Pass: "",
  });

  const InputEvent = (event) => {
    console.log(event.target.value);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value, name}=event.target;

    useFullName((pValue) => {
 
    return {
        ...pValue,
      [name]: value,
    };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Your Form Has Been Submitted Successfully")
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>
            {" "}
            Hello,{FullName.fName} {FullName.lName}{" "}
          </h1>

          <h2>{FullName.Email}</h2>

          <input
            type="text"
            placeholder="Entre your First Name"
            name="fName"
            onChange={InputEvent}
            value={FullName.fName}
          />
          <input
            type="text"
            placeholder="Entre your Last Name"
            name="lName"
            onChange={InputEvent}
            value={FullName.lName}
          />
          <input
            type="email"
            placeholder="Entre your Email"
            name="Email"
            onChange={InputEvent}
            value={FullName.Email}
          />
          <input
            type="passward"
            placeholder="Entre your passward"
            name="Pass"
            onChange={InputEvent}
            value={FullName.Pass}
          />
          <button type="submit"> submit</button>
        </div>
      </form>
    </>
  );
};

export default App;
