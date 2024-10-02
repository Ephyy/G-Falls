import { navigate } from 'astro:transitions/client';



export default function Prompt( {onEnter} ) {

    const handleKeyDown = (e) => {
        
        if (e.key === 'Enter') {
            const input = e.target.value;
            switch (input) {
                case 'login.py':
                    navigate('/login');
                    break;
                default:
                    e.target.value = '';
                    onEnter(input);
                    break;
            }
        }
    }
    

    return (
        <div className="flex">
            <span className="text-green-500">v@localhost</span>
            <span>:</span>
            <span className="text-fuchsia-600">/root</span>
            <span>#</span>
            <input
                className="user-input"
                type="text"
                spellCheck="false"
                autoComplete="off"
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

