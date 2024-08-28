import Prompt from "./Prompt";
import React, { useState } from 'react';

function UserPrompts() {
    const [prompts, setPrompts] = useState([]);

    const handleKeyDown = (e) => {
    
        if (e.key === 'Enter') {
            console.log("enter");
            
            // setPrompts([...prompts, <Prompt/>]);
        }
    }

    return (
        <div>
            <Prompt/>
        </div>
    );    
}

export default UserPrompts;