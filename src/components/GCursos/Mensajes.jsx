import { useState } from 'react';


function Mensajes({mensajes}) {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div id="mexito" onClick={handleClick}>
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