import { useState, useLayoutEffect } from "react";

const CountUseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 5) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button
        style={{ color: "#333", backgroundColor: "darkgrey" }}
        onClick={handleRun}
      >
        Run
      </button>
    </div>
  );
};
export default CountUseLayoutEffect;
