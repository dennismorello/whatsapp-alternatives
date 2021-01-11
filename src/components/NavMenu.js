import Link from "next/link";

import HamburgerIcon from "@/components/HamburgerIcon";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";

const NavMenu = ({ onMobileMenuOpen }) => (
  <nav className="relative flex items-center justify-between max-w-screen-xl px-4 py-5 mx-auto sm:px-6">
    <div className="flex items-center flex-1">
      <div className="flex items-center justify-between w-full md:w-1/2">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="flex -mr-2 md:hidden">
          <button
            type="button"
            onClick={onMobileMenuOpen}
            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      <div className="justify-end flex-shrink-0 hidden space-x-4 md:flex md:w-1/2">
        <Link href="/apps" passHref>
          <NavLink>Apps</NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dennismorello/whatsapp-alternatives"
        >
          GitHub
        </NavLink>
      </div>
    </div>
  </nav>
);

export default NavMenu;
