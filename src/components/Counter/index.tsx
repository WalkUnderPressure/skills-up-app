import { useState } from "react";

import * as classes from './Counter.module.scss'
import './style.scss'

function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div className="counter-wrapper">
        <button className={classes.CounterBtn} onClick={() => setCount(count + 1)}>
          You clicked me {count} times
        </button>
      </div>
    );
}

export default Counter
