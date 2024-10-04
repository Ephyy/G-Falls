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
    

    // Variable width
    const handleInput = (e) => {
        const input = e.target
        input.style.width = `${Math.max(input.value.length, 1)}ch`;
    }

    return (
        <div className="flex">
            <span className='user-info-container'>
                <span className="text-green-500">v@localhost</span>
                <span>:</span>
                <span className="text-fuchsia-600">/root</span>
            </span>
            <span className='user-input-container'>
                <span className='px-2'>#</span>
                <input
                    className="user-input"
                    type="text"
                    spellCheck="false"
                    autoComplete="off"
                    autoFocus={true}
                    onKeyDown={handleKeyDown}
                    onInput={handleInput}
                    style={{ width: '1ch' }} 
                />
            </span>
        </div>
    );
}

