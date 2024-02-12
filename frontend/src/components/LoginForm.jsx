function LoginForm(props) {
  const handleClose = () => {
    // Llama a la función onClose pasada como prop
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <form method="post" className="bg-white p-24 rounded shadow-2xl">
      <button
        id="close"
        className="bg-white w-full flex justify-end"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="w-6 h-6 stroke-azul-ap"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <h2 className="text-2xl font-semibold mb-4 text-sol-ap">Login</h2>
      <form>
        <div className="mb-4">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-5 h-5 stroke-azul-ap flex"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <label
              htmlFor="username"
              className="block text-azul-ap font-semibold"
            >
              Usuario
            </label>
          </div>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border   border-gray-300 text-azul-ap text-md rounded-lg focus:ring-azul-ap focus:border-azul-ap block p-2.5 placeholder-azul-ap placeholder:opacity-70"
          />
        </div>
        <div className="mb-4">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-azul-ap flex"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>

            <label
              htmlFor="password"
              className="block text-azul-ap font-semibold"
            >
              Contraseña
            </label>
          </div>

          <input
            type="password"
            id="password"
            name="password"
            className="w-full border   border-gray-300 text-azul-ap text-md rounded-lg focus:ring-azul-ap focus:border-azul-ap block p-2.5 placeholder-azul-ap placeholder:opacity-70"
          />
        </div>
        <button
          type="submit"
          className="bg-azul-ap text-white py-2 px-4 rounded hover:bg-sol-ap focus:outline-none focus:ring focus:ring-azul-ap focus:ring-opacity-50"
        >
          Sign In
        </button>
      </form>
    </form>
  );
}
export default LoginForm;
