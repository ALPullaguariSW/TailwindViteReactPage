import React from "react";
import logo from "../assets/rFooter.svg";

import "./CSS/Footer.css";
function Footer() {
  return (
    <footer className="text-white bg-azul-ap">
      <div className="p-10 ">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center justify-around">
          <a href="">
            <img src={logo} className="w-40" alt="" />
          </a>

          <ul className="flex flex-row space-x-10 lg:space-x-24 font-semibold">
            <li>
              <a href="#" className="hover:text-sol-ap">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sol-ap">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sol-ap">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sol-ap">
                Contact
              </a>
            </li>
          </ul>

          <ul className="flex flex-wrap space-x-11 xl:space-x-0 md:flex-col">
            <li className="font-semibold">Contactos:</li>
            <div className="flex flex-row">
              <ul>
                <li>
                  <a href="#" className="hover:text-sol-ap">
                    +593 998 287 277
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sol-ap">
                    +593 969 093 116
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        <hr className="border-azul-ap" />
        <div className="flex flex-wrap justify-center">
          © 2023{" "}
          <a href="" className="hover:text-sol-ap px-2">
            A&P ASESORES
          </a>
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
