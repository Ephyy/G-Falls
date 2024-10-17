import { actions } from 'astro:actions';

function Buscador() {
  return (
    <form
      method="POST"
      action={actions.buscar}
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