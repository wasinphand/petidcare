import React from 'react';
import axios from 'axios';
import Form from './Form';

export default Create;

function Create() {
    return (
        <>
            <header>Create</header>
            <Form
                canary={(userInput) => {
                    
                    axios.post('http://localhost:8000/api/pet/', { ...userInput, age: parseInt(userInput.age) }).then((res) => {
                        console.log(res);
                    });
                }}
            />
        </>
    );
}
