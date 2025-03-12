import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/about">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/">Work</NavLink>
      </li>
      <li>
        <NavLink to="/about">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm flex justify-between">
      <div className="navbar-start">
        <a className="text-xl font-montserrat font-bold">Tainur Rahaman</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div className="md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="btn">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
