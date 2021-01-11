import cn from "classnames";

const Section = ({ className, children, ...otherProps }) => (
  <section
    className={cn("max-w-screen-xl px-4 sm:px-6 mx-auto w-full", className)}
    {...otherProps}
  >
    {children}
  </section>
);

export default Section;
