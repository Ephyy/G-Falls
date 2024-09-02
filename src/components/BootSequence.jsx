

import { useEffect, useState} from 'react'
import sequence from '../data/boot_sequence.json'
import { navigate } from 'astro:transitions/client';

function BootSequence() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        let delay = 0;
        sequence.forEach((message) => {
            ((currentDelay) => {
                setTimeout(() => {
                    const newLog = "[" + (currentDelay / 1000).toFixed(6) + "]  " + message.text;
                    setMessages((prevMessages) => [...prevMessages, newLog]);
                }, currentDelay);
            })(delay);

            // Aumentando el delay para el siguiente mensaje
            delay += message.delay;
        });

        setTimeout(() => {
            navigate("/terminal")
        }, delay)

    }, []);

    return (
        <div id='boot-sequence' className='no-wrap'>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </div>
    );
    
}

export default BootSequence