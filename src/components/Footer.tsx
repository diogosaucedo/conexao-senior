export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Conexão Sênior. Todos os direitos
          reservados.
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="pi pi-facebook" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="pi pi-instagram" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="pi pi-twitter" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
