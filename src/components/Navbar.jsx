import { NavLink } from "react-router-dom";

import { logo3 } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo3} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
     <a
  href="https://drive.google.com/file/d/1LyTtXEcxKhhzmZ4bnRT0e3WnCftU8D-6/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black hover:text-blue-600"
>
  Resume
</a>




      </nav>
    </header>
  );
};

export default Navbar;