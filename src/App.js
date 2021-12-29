import { useState, useEffect } from "react";
import classes from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 3) {
      let timeout = setTimeout(() => {
        setCount(0);
      }, 2000);
    }
  }, [count]);

  console.log(count);

  const clickHandler = (e) => {
    if (count >= 3) return;
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div onClick={clickHandler} className={classes.app}>
      <div
        className={`${classes.app__child} ${
          count === 3 && classes["changed-color"]
        }`}
      ></div>
    </div>
  );
}

export default App;
