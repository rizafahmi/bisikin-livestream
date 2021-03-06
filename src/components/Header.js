import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Header({ user, handleLogout }) {
  return (
    <div className="md:flex md:items-center md:justify-between bg-gray-200 px-4 py-2 shadow-md">
      <header className="flex-1 min-w-0">
        <Link to="/">
          <h1 className="text-2xl font-extrabold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            BISIK.IN
          </h1>
        </Link>
      </header>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        {!user ? (
          <>
            <Link to="/login">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </Link>
          </>
        ) : (
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
