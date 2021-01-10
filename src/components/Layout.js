import cn from "classnames";

const Layout = ({ className, ...otherProps }) => (
  <div
    className={cn(
      "px-6 py-12 mx-auto max-w-7xl md:py-16 lg:py-20 lg:px-8",
      className
    )}
    {...otherProps}
  />
);

export default Layout;
