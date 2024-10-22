import { navigate } from 'astro:transitions/client';

export default function Prompt( {onEnter} ) {

    const SECRET_COMMAND = "login";

    const handleKeyDown = (e) => {
        
        if (e.key === 'Enter') {
            const input = e.target.value;
            switch (input) {
                case SECRET_COMMAND:
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
            <span className='user-info-container'>
                <span className="text-green-500">v@localhost</span>
                <span>:</span>
                <span className="text-fuchsia-600">/root</span>
            </span>
            <span className='px-2'>#</span>
            <input
                className="user-input w-11/12"
                type="text"
                spellCheck="false"
                autoComplete="off"
                autoFocus={true}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

