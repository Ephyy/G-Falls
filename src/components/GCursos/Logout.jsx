import { actions } from 'astro:actions';
import { navigate } from 'astro:transitions/client';

const Logout = () => {
    
    const handleLogout = async () => {
        const result = await actions.user.logout();
        if (result.data?.success) {
            navigate("/login");
        } else {
            alert("Error al cerrar sesión");
        }
    };

    return (
        <a className="cursor-pointer" onClick={handleLogout}>
            <span class="fa-solid fa-circle-xmark"></span> Salir
        </a>
    );
};


export default Logout;