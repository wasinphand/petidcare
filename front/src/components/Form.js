import React, { useReducer } from "react";

import FormInputRow, { INPUT_TYPE } from "./FormInputRow";

export default Form;

function Form({ canary }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      petID: "",
      Name: "",
      Age: "",
      PetType: "",
      CitizenID: "",
    }
  );

  const inputFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  return (
    <>
      {["petID", "Name", "Age", "PetType", "CitizenID"].map((key) => (
        <FormInputRow
          key={key}
          inputType={INPUT_TYPE.TEXT}
          title={key}
          name={key}
          value={userInput[key]}
          onChange={inputFormChangeHandler}
        />
      ))}
      <button className="m-5 p-5" onClick={() => canary(userInput)}>
            Process
      </button>
    </>
  );
}
