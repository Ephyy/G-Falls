import Prompt from "./Prompt";
import React, { useState } from 'react';

function UserPrompts() {
    const [prompts, setPrompts] = useState([1]);

    
    const addPrompt = () => {
        setPrompts([...prompts, setPrompts.length + 1]);
    }

    return (
        <div>
            {prompts.map((prompt, index) => (
                <Prompt onEnter={addPrompt} />
            ))}
        </div>
    );    
}

export default UserPrompts;