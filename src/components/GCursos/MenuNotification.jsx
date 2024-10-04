
import { useState } from "react";

function MenuNotification() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <a
                className="nuevo cursor-pointer"
                onClick={handleClick}
            >
                1
            </a>
            <ul className={`nuevos ${isActive ? 'active' : ''}`}>
                <li>
                    <a href="/g-cursos/tareas">Tareas (1)</a>
                </li>
            </ul>
        </>
    );
}

export default MenuNotification;