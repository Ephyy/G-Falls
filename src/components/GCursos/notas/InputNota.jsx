
import { useState } from "react";


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


function InputNota({value=''}) {
  const [inputValue, setInputValue] = useState(value);
  const [inputClass, setInputClass] = useState('');

  const handleChange = (event) => {
    const nota = event.target.value;
    setInputValue(nota);
  }

  const handleBlur = (event) => {
    const nota = event.target.value;

    // Parseamos la nota
    const parsedNota = parseNota(nota);
    setInputValue(parsedNota);
    
    if (parsedNota !== value) {
      setInputClass('rojo');
    } else {
      setInputClass('');
    }
  }


  return (
    <input
    type="text"
    name="notas[21963898][1]"
    value={inputValue}
    className={inputClass}
    autocomplete="off"
    tabindex="95"
    onChange={handleChange}
    onBlur={handleBlur}
  />
  )
}

export default InputNota;