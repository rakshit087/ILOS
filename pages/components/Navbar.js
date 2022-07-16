export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex p-4 justify-end">
      <button onClick={() => setDarkMode(!darkMode)}>X</button>
    </nav>
  );
};
