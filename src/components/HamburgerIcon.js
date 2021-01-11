const HamburgerIcon = (props) => (
  <svg
    className="w-6 h-6"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

export default HamburgerIcon;
