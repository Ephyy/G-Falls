import { useState } from "react";

// cargos: profesor_de_catedra, profesor_auxiliar, ayudante
const MensajeForo = ({titulo, autor, fotoAutor, cargo, fecha, children}) => {
    const [isActive, setIsActive] = useState(false);

    const handleTitleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
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
                      <a id="mensaje-titulo" className="cursor-pointer" onClick={handleTitleClick}>
                        {titulo}
                      </a>
                      {/* <em title="cantidad de lecturas" class="lecturas">100</em> */}
                    </h1>
                    <h2>
                        <a className="usuario">{autor}</a>
                        <em>
                            <span className="tiempo_rel">
                                {/* <span className="no-excel only-movil">{mobileDate}</span> */}
                                <span className="no-excel no-movil">{fecha}</span>
                                {/* <span className="only-excel">{excelDate}</span> */}
                            </span>
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
                            <span className="tiempo_rel">
                                {/* <span class="no-excel only-movil">28 Sep</span> */}
                                <span className="no-excel no-movil">{fecha}</span>
                                {/* <span class="only-excel">2024-09-28 19:06:28</span> */}
                            </span>
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