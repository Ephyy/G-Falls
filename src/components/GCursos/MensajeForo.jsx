import { useState } from "react";
import Fecha from "./Fecha";

// cargos: profesor_de_catedra, profesor_auxiliar, ayudante
const MensajeForo = ({titulo, autor, fotoAutor, cargo, fecha, children}) => {
    const [isActive, setIsActive] = useState(false);

    const handleTitleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={isActive ? 'activo' : ''}>
            <div className="sticky objetoflex">
                <div className={`cargo  cargo-${cargo}`} >
                    <img  
                        className="logo avatar chica"
                        alt={autor}
                        src={fotoAutor}
                    />
                </div>
                <div>
                    <h1>
                      <a className="cursor-pointer" onClick={handleTitleClick}>
                        {titulo}
                      </a>
                      {/* <em title="cantidad de lecturas" class="lecturas">100</em> */}
                    </h1>
                    <h2>
                        <a className="usuario">{autor}</a>
                        <em>
                            <Fecha timestamp={fecha} withHour={true} dataHrs={1} />
                        </em>
                    </h2>
                </div>
            </div>
            <div className={`msg raiz ${isActive ? '' : 'inactivo'}`}>
                <div className="container">
                    <span className="autor sticky" data-sticky-offset="45">
                        <img 
                            className="cargo"
                            src={`https://www.u-cursos.cl/d/images/cargos/${cargo}.svg`}
                            {
                                ...(cargo === 'profesor_de_catedra' ? {alt: 'Profesor de Cátedra'} : 
                                cargo === 'profesor_auxiliar' ? {alt: 'Profesor Auxiliar'} : 
                                cargo === 'ayudante' ? {alt: 'Ayudante'} : {alt: 'Cargo desconocido'})
                            }                                
                        />
                        <a className="usuario">
                            {autor}
                        </a>
                        <em>
                            <Fecha timestamp={fecha} withHour={true} />
                        </em>
                        {/* Estrellita */}
                    </span>
                    <div className="texto">
                        <img 
                            className="logo avatar chica"
                            alt={autor}
                            src={fotoAutor}
                        />
                        <span className="ta">
                            {children}
                        </span>
                        {/* ul de compartir/responder/reportar */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MensajeForo;