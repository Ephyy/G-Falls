import Prompt from "./Prompt";
import React, { useState } from 'react';
import CommandLine from "./CommandLine";

function UserPrompts() {
    const [buffer, setPrompts] = useState([]);

    
    const addConsoleLog = (command) => {
        
        let msg;
        switch (command) {
            // TODO: CLEAR COMMAND
            case 'help':
                msg = "d206c3eff081652020293d54f41d841d4c05b9f361dfea96e9a5352cbb888a9cb7ae4d88a1ecedcd9090b941c8fdc2982136313417e5efd67e0daedbc1fc2806";
                break;
            case 'ls':
                msg = "login.py";
                break;
            case '':
                break;
            default:
                msg = `sh: command not found: ${command}`;
        }

        
        const item = (
            <CommandLine message={msg} userInput={command} />
        )

        if (buffer.length >= 1) {
            setPrompts([...buffer, item]);
        } else {
            setPrompts([item, ...buffer]);
        }
        
    }

    return (
        <div>
            {
            buffer.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
            ))
            }

            <Prompt onEnter={addConsoleLog} />
        </div>
    );    
}

export default UserPrompts;