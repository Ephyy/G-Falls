import Prompt from "./Prompt";
import React, { useState } from 'react';
import CommandLine from "./CommandLine";

function UserPrompts() {
    const [buffer, setPrompts] = useState([]);

    
    const addConsoleLog = (command) => {
        
        let msg;
        switch (command) {
            case 'clear':
                setPrompts([]);
                return;
            case 'help':
                msg = "2729321512111015301329191219152414261015221013262311241426102226171924";
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