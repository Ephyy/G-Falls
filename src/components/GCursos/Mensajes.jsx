import { useEffect } from 'react';

function Mensajes({mensajes}) {
  useEffect(() => {
    if (mensajes.length > 0) {
      console.log('Mensajes actualizados:', mensajes);
      // Aquí puedes agregar cualquier lógica adicional que necesites cuando los mensajes cambien
      
    }
  }, [mensajes]);

  return (
    <div id="mexito">
    <a className="close">x</a>
    <ul>
      {mensajes?.map((message) => (
        <li>{message}</li>
      ))}
    </ul>
    </div>
  )
}

export default Mensajes;