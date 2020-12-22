import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              onClick=""
            >
              Anini
            </button>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* Opciones del menu */}
              <li className="nav-item">
              <button
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white text-lg hover:opacity-75"
                
              >
                Productos
              </button>
              </li>

              <li className="nav-item">
              <button
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white text-lg hover:opacity-75"
                
              >
                Contáctanos
              </button>
              </li>

              <li className="nav-item">
              <button
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white text-lg hover:opacity-75"
                
              >
                Sobre nosotros
              </button>
              </li>

              {/* Redes sociales */}
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.google.es"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"><span className="lg:hidden"> Facebook</span></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.google.es"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"><span className="lg:hidden"> Twitter</span></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.google.es"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"><span className="lg:hidden"> Pinterest</span></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.google.es"
                >
                  <i className="fab fa-instagram text-lg leading-lg text-white opacity-75"><span className="lg:hidden"> Instagram</span></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}