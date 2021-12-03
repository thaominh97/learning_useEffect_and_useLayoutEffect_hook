const Button = ({ onClick }) => {
  return (
    <button
      style={{ color: "#333", backgroundColor: "darkgrey" }}
      onClick={onClick}
    >
      Toggle
    </button>
  );
};
export default Button;
