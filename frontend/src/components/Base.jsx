import React, { useState } from "react";
import logo from "../assets/Leon AP.svg";
import "./CSS/Base.css";
import LoginForm from "./LoginForm";

function Base() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu); // Cambia el estado del menú al contrario del estado actual
  };
  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <header className="p-6 text-md shadow-md">
      <nav className="flex justify-around items-center ">
        <a href="" className="">
          <img src={logo} className="w-20" alt="" />
        </a>

        <button className="md:hidden" onClick={handleMenuClick}>
          {/* Usa el estado showMenu para cambiar entre el icono de hamburguesa y la X */}
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-azul-ap"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-azul-ap"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Agrega la clase hidden si showMenu es false para ocultar el menú en dispositivos móviles */}
        <div
          className={`md:flex  font-bold text-lg items-center justify-around ${
            showMenu ? "" : "hidden"
          }`}
        >
          <ul
            className={`flex flex-col md:flex-row md:space-x-12  justify-around md:justify-between space-y-12 md:space-y-0  w-auto ${
              showMenu || !showMenu ? "" : "hidden"
            }`}
          >
            <li>
              <a
                href="#"
                className="text-azul-ap rounded hover:drop-shadow-xl hover:text-sol-ap "
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-azul-ap rounded hover:drop-shadow-xl hover:text-sol-ap "
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="#sn"
                className="text-azul-ap rounded hover:drop-shadow-xl hover:text-sol-ap "
              >
                Servicios
              </a>
            </li>
            <li>
              <a className="text-azul-ap rounded hover:drop-shadow-xl hover:text-sol-ap ">
                Contactos
              </a>
            </li>
          </ul>
        </div>
        <button
          className="bg-azul-ap  flex p-4 h-12 rounded text-white items-center hover:bg-sol-ap "
          onClick={handleLoginClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          LOGIN
        </button>
      </nav>

      {showLoginForm && (
        <div className="fixed top-0 z-10 right-0 bottom-0 left-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <LoginForm onClose={handleCloseLoginForm} />
        </div>
      )}
    </header>
  );
}

export default Base;
