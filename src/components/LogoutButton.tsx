import { actions } from "astro:actions";
import { navigate } from "astro:transitions/client";

export function LogoutButton() {
  return (
    <button
      onClick={async () => {
        const { error } = await actions.user.logout();
        if (!error) navigate("/login");
      }}
    >
      Salir
    </button>
  );
}
