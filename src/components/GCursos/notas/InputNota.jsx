
import { useState } from "react";

function validarNota(nota) {
  let numero = parseFloat(nota);

  if (isNaN(numero)) {
    return false;
  }
  // Parse:
  numero = parseNota(nota);

  if (numero < 1 || numero > 7) {
    return false;
  }

  return true;
}

function parseNota(nota) {
  const entero = nota[0];
  const decimal = nota[1] ? nota[1].charAt(0) : '0';
  return parseFloat(`${entero}.${decimal}`);
}

function InputNota({value=''}) {
  const [inputValue, setInputValue] = useState(value);
  const [inputClass, setInputClass] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  const handleBlur = (event) => {
    const newValue = event.target.value;

    if (newValue !== value) {
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