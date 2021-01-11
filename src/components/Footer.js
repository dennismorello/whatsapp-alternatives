import cn from "classnames";

const Footer = ({ className, ...otherProps }) => (
  <footer className={cn("bg-white", className)} {...otherProps}>
    <div className="max-w-screen-xl px-4 py-12 mx-auto overflow-hidden sm:px-6 lg:px-8">
      <p className="text-center">
        Copyleft {new Date().getFullYear()},{" "}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://morello.dev"
        >
          Dennis Morello
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
