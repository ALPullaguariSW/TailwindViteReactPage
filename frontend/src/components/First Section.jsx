import React from "react";
import bgFamily from "../assets/1.jpg";

import "./CSS/First Section.css";
function FirstSection() {
  return (
    <section>
      <div className=" text-azul-ap relative flex items-center ">
        <div className="absolute justify-center w-full pr-8 md:w-5/6  flex flex-col space-y-3 md:justify-end items-end ">
          <p className=" font-bold md:text-3xl text-xl text-end">
            Vida más relajada con <br />
            seguros inteligentes.
          </p>
          <form
            action=""
            className="space-y-1 flex flex-col justify-end items-end w-72"
          >
            <div className="relative w-full flex justify-center items-center ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <input
                type="email"
                id="first_name"
                className="w-full border pl-10  border-gray-300 text-azul-ap text-md rounded-lg focus:ring-azul-ap focus:border-azul-ap block p-2.5 placeholder-azul-ap placeholder:opacity-70"
                placeholder=" Escribe tu email aquí"
                autoComplete="off"
                required
              />
            </div>

            <div>
              <button className="bg-azul-ap flex justify-between space-x-2  w-full -scale-2  px-4 py-2 rounded text-white items-center hover:bg-sol-ap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
                <div>Suscribirse</div>
              </button>
            </div>
          </form>
        </div>

        <img
          className="h-300 md:h-400 w-full transform -scale-x-100 -z-10 object-cover  justify-center "
          src={bgFamily}
          alt={"fondoFamilia"}
        />
      </div>
    </section>
  );
}
export default FirstSection;
