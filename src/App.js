import "./styles.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import CountUseEffect from "./components/CountUseEffect";
import CountUseLayoutEffect from "./components/CountUseLayoutEffect";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 5) {
      setCount(0);
    }
  }, [count]);
  const handleClick = () => {
    setToggle(!toggle);
    // console.log(toggle)
  };
  const handleRun = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h4>useEffect</h4>
      <ul>
        <li>update state</li>
        <li>update DOM(mutated)</li>
        <li>render UI</li>
        <li>if dependencies change, call cleanup</li>
        <li>call callback useEffect</li>
      </ul>
      <Button onClick={handleClick} />
      {toggle && <CountUseEffect count={count} onClick={handleRun} />}
      <h4>useLayoutEffect</h4>
      <ul>
        <li>update state</li>
        <li>update DOM(mutated)</li>
        <li>if dependencies change, call cleanup(sync)</li>
        <li>call callback useLayoutEffect(sync)</li>
        <li>render UI</li>
      </ul>
      <Button onClick={handleClick} />
      {toggle && <CountUseLayoutEffect />}
    </div>
  );
}
