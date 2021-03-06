import { FiMoon, FiSun } from "react-icons/fi";
export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-end h-24 pr-8 md:h-1/6">
      <button onClick={() => setDarkMode(!darkMode)}>
        {!darkMode ? (
          <FiMoon className="h-7 w-7" />
        ) : (
          <FiSun className="text-white h-7 w-7" />
        )}
      </button>
    </nav>
  );
};
