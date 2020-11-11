import React from 'react';
import Form from './Form';

export default Index;

function Index() {
    return (
        <div>
            <Form canary={userInput => {console.log(userInput)}} />
        </div>
    );
}
