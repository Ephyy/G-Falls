function Buscador() {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.q.value === "Weirdmageddon" ||
      event.target.q.value === "weirdmageddon"
    ) {
      alert("¿Has probado colocar un 7 en binario?");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="q"
        id="__q"
        placeholder="Buscar..."
        title="Buscar"
      />
      <button type="submit">
        <span>Buscar</span>
      </button>
    </form>
  )
}

export default Buscador;