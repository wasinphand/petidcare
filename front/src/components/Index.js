import React from 'react';
import Form from './Form';
import axios from 'axios';

export default Index;

const pretty = (data) => {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

function Index() {
    return (
        <div>
            <Form
                canary={(userInput) => {
                    axios.get('http://localhost:8000/api/pet/');
                }}
            />
        </div>
    );
}
