const CloseIcon = (props) => (
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
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

export default CloseIcon;
