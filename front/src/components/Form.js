import React, { useReducer } from 'react';

import FormInputRow, { INPUT_TYPE } from './FormInputRow';

export default Form;

function Form({ canary }) {
    const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
        petID: '0123456001',
        name: 'Petto1',
        age: '18',
        petType: 'dog',
        picture: 'httplinkylinky',
        citizenID: '1110300241396',
    });

    const inputFormChangeHandler = (event) => {
        const { name, value } = event.target;
        setUserInput({ [name]: value });
    };

    return (
        <>
            <div className="">
                {['petID', 'name', 'age', 'petType', 'picture', 'citizenID'].map((key) => (
                    <FormInputRow
                        key={key}
                        inputType={INPUT_TYPE.TEXT}
                        title={key}
                        name={key}
                        value={userInput[key]}
                        onChange={inputFormChangeHandler}
                    />
                ))}
            </div>
            <button className="m-5 p-5" onClick={() => canary(userInput)}>
                Process
            </button>
        </>
    );
}
