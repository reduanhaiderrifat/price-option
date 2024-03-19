import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/", exact: true },
    { id: 2, name: "About", path: "/about", exact: true },
    { id: 3, name: "Services", path: "/services", exact: true },
    { id: 4, name: "Contact", path: "/contact", exact: true },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden lg:hidden hover:bg-gray-600 w-6 rounded-lg  "
      >
        {open === true ? (
          <IoCloseSharp className="text-2xl"></IoCloseSharp>
        ) : (
          <FiMenu className="text-2xl "></FiMenu>
        )}
      </div>
      <ul
        className={` md:flex lg:flex gap-3 duration-1000 absolute md:static lg:static ${
          open ? "left-0" : "-left-44"
        }`}
      >
        {routes.map((rout) => (
          <Link key={rout.id} rout={rout}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
