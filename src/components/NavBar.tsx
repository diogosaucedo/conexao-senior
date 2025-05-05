import { Button } from "primereact/button";
import { useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleKeyNavigation = (event: React.KeyboardEvent, path: string) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(path);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Navegação principal"
      className="flex items-center justify-center w-full h-24 shadow-sm text-slate-950"
    >
      <div className="flex items-center justify-between w-full max-w-5xl">
        <Button
          link
          className="text-xl font-bold p-0 hover:text-indigo-600 transition-colors text-slate-950"
          onClick={() => navigate("/")}
          onKeyDown={(e) => handleKeyNavigation(e, "/")}
          aria-label="Conexão Sênior - Navegar para página inicial"
          tabIndex={0}
        >
          <h1 className="text-xl font-bold">Conexão Sênior</h1>
        </Button>
        <div role="menu" className="flex gap-4">
          <Button
            role="menuitem"
            label="Eventos"
            onClick={() => navigate("/eventos")}
            onKeyDown={(e) => handleKeyNavigation(e, "/eventos")}
            icon="pi pi-calendar"
            tabIndex={0}
            aria-label="Eventos - Navegar para página de eventos"
          />
          <Button
            role="menuitem"
            label="Comunidades"
            onClick={() => navigate("/comunidades")}
            onKeyDown={(e) => handleKeyNavigation(e, "/comunidades")}
            icon="pi pi-users"
            tabIndex={0}
            aria-label="Comunidades - Navegar para página de comunidades"
          />
        </div>
      </div>
    </nav>
  );
};
