
function DeniedAccessAlert({clases='', children}) {

    const handleClick = () => {
        alert(
            "ACCESO DENEGADO"
          );
    }

    return (
        <a className={`cursor-pointer ${clases}`} onClick={handleClick}>
            {children}
        </a>
    )
}


export default DeniedAccessAlert ;