const CountUseEffect = ({ count, onClick }) => {
  return (
    <div>
      <p>{count}</p>
      <button
        style={{ color: "#333", backgroundColor: "darkgrey" }}
        onClick={onClick}
      >
        Run
      </button>
    </div>
  );
};
export default CountUseEffect;
