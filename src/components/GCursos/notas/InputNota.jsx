import { useState, useRef } from "react";


function parseNota(nota) {
  // Quitamos cualquier caracter que no sea un número
  nota = nota.replace(/[^0-9]/g, '');

  const entero = nota[0];
  const decimal = nota[1] ? nota[1].charAt(0) : '0';

  const parsed = `${entero}.${decimal}`
  const parsedFloat = parseFloat(parsed);
  

  if (isNaN(parsedFloat) || parsedFloat < 1 || parsedFloat > 7) {
    return "";
  }
  
  return parsed;
}


function InputNota({value='',  className = '' }) {
  const [inputValue, setInputValue] = useState(value);
  const [inputClass, setInputClass] = useState(className);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const nota = event.target.value;
    setInputValue(nota);
  }

  const handleBlur = (event) => {
    const nota = event.target.value;

    // Verificamos si hubo cambios
    if (nota !== value) {      
      let parsedNota = '111';
      if (nota !== '111') {
        // Parseamos la nota
        parsedNota = parseNota(nota);
      }
      
      setInputValue(parsedNota);
      if (parsedNota !== value) {
        setInputClass('rojo');
      } else {
        setInputClass('');
      }
    }
    
  }

  const handleClick = (event) => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  }

  return (
    <input
    type="text"
    name="nota"
    value={inputValue}
    className={inputClass}
    autoComplete="off"
    tabIndex="95"
    onChange={handleChange}
    onBlur={handleBlur}
    onClick={handleClick}
    ref={inputRef}
  />
  )
}

export default InputNota;