import React from 'react';
import axios from 'axios';
import Form from './Form';

export default Update;

function Update() {
    return (
        <>
            <header>Update</header>
            <Form
                canary={(userInput) => {
                    axios
                        .put(`http://localhost:8000/api/pet/${userInput.petID}/`, { ...userInput })
                        .then((res) => {
                            console.log(res);
                        });
                }}
            />
        </>
    );
}
