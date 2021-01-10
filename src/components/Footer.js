const Footer = () => (
  <footer className="bg-gray-200">
    <div className="py-8 mx-auto prose">
      <p className="text-center">
        Copyleft {new Date().getFullYear()},{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://morello.dev">
          Dennis Morello
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
