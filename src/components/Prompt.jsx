


export default function Prompt() {
    return (
        <div className="flex mt-2">
            <span className="text-green-500">v@localhost</span>
            <span>:</span>
            <span className="text-fuchsia-600">/root</span>
            <span>#</span>
            <input
                className="user-input text-zinc-50 bg-transparent ml-2"
                type="text"
                spellCheck="false"
                autoComplete="off"
            />
        </div>
    );
}

