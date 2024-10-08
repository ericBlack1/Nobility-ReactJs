import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-green-900 h-[175px] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="mt-2 flex justify-between items-center">
          <button className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="h-6 w-6"
              aria-label="Back"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span className="text-white text-lg font-semibold">Back</span>
          </button>
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/game" className="hover:text-blue-200">
                Quiz
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
