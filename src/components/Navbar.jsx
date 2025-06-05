import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-12 h-12 rounded-lg bg-black-500 items-center justify-center flex font-bold shadow-md">
        <p className="purple-gradient_text">TT</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-purple-400" : "text-black"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-purple-400" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/Contact' className={({ isActive }) => isActive ? "text-purple-400" : "text-black"}>
          Contact
        </NavLink>
        <a
          href="https://drive.google.com/file/d/1j14pwKvAVytb99zT8qUUaX3hRCE_sVX6/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-purple-400"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
