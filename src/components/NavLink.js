import cn from "classnames";
import { forwardRef } from "react";

const NavLink = forwardRef(
  ({ className, children, ...otherProps }, forwardedRef) => (
    <a
      className={cn(
        "block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 md:inline-flex md:items-center md:px-4",
        className
      )}
      ref={forwardedRef}
      {...otherProps}
    >
      {children}
    </a>
  )
);

NavLink.displayName = "NavLink";

export default NavLink;
