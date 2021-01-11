import cn from "classnames";
import Link from "next/link";

import CloseIcon from "@/components/CloseIcon";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";

const MobileNavMenu = ({ isOpen, onClose }) => (
  <div
    className={cn(
      "absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden",
      {
        "scale-100 opacity-100": isOpen,
        "pointer-events-none scale-90 opacity-0": !isOpen,
      }
    )}
  >
    <div className="rounded-lg shadow-md">
      <div
        className="overflow-hidden bg-white rounded-lg shadow-xs"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="main-menu"
      >
        <div className="flex items-center justify-between px-5 pt-3">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className="-mr-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="divide-y-2">
          <div className="p-2 space-y-1">
            <Link href="/apps" passHref>
              <NavLink role="menuitem">Apps</NavLink>
            </Link>
            <Link href="/about" passHref>
              <NavLink role="menuitem">About</NavLink>
            </Link>
          </div>
          <div className="p-2 space-y-1">
            <NavLink
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dennismorello/github-alternatives"
            >
              GitHub
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MobileNavMenu;
