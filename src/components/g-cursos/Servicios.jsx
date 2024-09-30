import { useState, useEffect } from 'react';

const servicios = [
  {
    ref: "/g-cursos/actas",
    icon: "https://static.u-cursos.cl/images/servicios/actas_v8712.svg",
    title: "Acta",
  },
  {
    ref: "/g-cursos/clases",
    icon: "https://static.u-cursos.cl/images/servicios/clases_v8712.svg",
    title: "Clase Virtual",
  },
  {
    ref: "/g-cursos/encuestas",
    icon: "https://static.u-cursos.cl/images/servicios/encuestas_v8712.svg",
    title: "Encuestas",
  },
  {
    ref: "/g-cursos/foro",
    icon: "https://static.u-cursos.cl/images/servicios/foro_v8712.svg",
    title: "Foro",
  },
  {
    ref: "/g-cursos/historial",
    icon: "https://static.u-cursos.cl/images/servicios/historial_v8712.svg",
    title: "Historial",
  },
  {
    ref: "/g-cursos/notas",
    icon: "https://static.u-cursos.cl/images/servicios/notas_v8712.svg",
    title: "Notas",
  },
  {
    ref: "/g-cursos/novedades",
    icon: "https://static.u-cursos.cl/images/servicios/novedades_v8712.svg",
    title: "Novedades",
  },
  {
    ref: "/g-cursos/tareas",
    icon: "https://static.u-cursos.cl/images/servicios/tareas_v8712.svg",
    title: "Tareas",
  },
  {
    ref: "/g-cursos/votaciones",
    icon: "https://static.u-cursos.cl/images/servicios/votaciones_v8712.svg",
    title: "Votaciones",
  },
];

const Servicios = ({ currentPath }) => {
    // Encuentra el índice del servicio basado en la ruta actual
    const initialSelectedIndex = servicios.findIndex(servicio => servicio.ref === currentPath);
  
    // Inicializa el estado con el índice del servicio basado en la ruta actual
    const [selectedService, setSelectedService] = useState(initialSelectedIndex);
  
    useEffect(() => {
      // Actualiza el estado cuando la ruta cambie
      const currentIndex = servicios.findIndex(servicio => servicio.ref === currentPath);
      setSelectedService(currentIndex);
    }, [currentPath]);
  
    const handleClick = (index) => {
      setSelectedService(index);
    };
  
    return (
      <ul className="modulos" role="navigation">
        {servicios.map((servicio, index) => (
          <li
            key={index}
            className={`servicio ${selectedService === index ? 'sel' : ''}`}
            onClick={() => handleClick(index)}
          >
            <a href={servicio.ref}>
              <img src={servicio.icon} alt="" />
              <span>{servicio.title}</span>
            </a>
          </li>
        ))}
      </ul>
    );
};
  
export default Servicios;