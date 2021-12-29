import { useState, useEffect } from "react";
import classes from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // let timeout;
    if (count === 3) {
      let timeout = setTimeout(() => {
        setCount(0);
      }, 2000);
    }
  }, [count]);

  const clickHandler = (e) => {
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
