

const Contacto = () => {

    const handleContacto = () => {
        alert(
            "Cualquier problema, error, o comentario con la página, comunicarlo con Ephy 🐱‍💻"
          );
    }

    return (
        <a className="cursor-pointer" onClick={handleContacto}>
            <span className="fa-solid fa-envelope"></span> Contacto
        </a>
    )
}

export default Contacto;