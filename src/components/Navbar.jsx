import { links } from "../data";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-2xl">
      <div className="navbar align-element">
        {/* title */}
        <h2 className="navbar-start text-3xl font-bold">
          Port<span className="text-primary-600">folio</span>
        </h2>

        {/* navLinks */}
        <div className="navbar-center hidden lg:flex lg:gap-4">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg font-semibold tracking-wide text-gray-500 hover:text-primary-500 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>

        {/* dropdown */}
        <div className="navbar-end">
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="flex gap-x-3">
                {links.map((link) => {
                  const { id, href, text } = link;
                  return (
                    <a
                      key={id}
                      href={href}
                      className="capitalize text-lg tracking-wide hover:text-sky-500 duration-300"
                    >
                      {text}
                    </a>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
