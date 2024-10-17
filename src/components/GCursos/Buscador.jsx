function Buscador() {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.q.value === "secret") {
      alert("Nota secreta: 1201")
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