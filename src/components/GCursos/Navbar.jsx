


const Navbar = ({servicio, title, subTitle=''}) => {


    return (
        <ul id="navbar">
            {subTitle ? <li><a href={`/g-cursos/${servicio}`}>{title}</a></li> : <li>{title}</li>}
            {subTitle && <li>{subTitle}</li>}
        </ul>
    );
}

export default Navbar;