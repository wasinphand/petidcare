import React from 'react';
import axios from 'axios';
import Form from './Form';

export default Delete;

function Delete() {
    return (
        <>
            <header>Delete</header>
            <Form
                canary={(userInput) => {
                    axios.delete(`http://localhost:8000/api/pet/${userInput.petID}/`, { ...userInput }).then((res) => {
                        console.log(res);
                    });
                }}
                onlyPetID
            />
        </>
    );
}
