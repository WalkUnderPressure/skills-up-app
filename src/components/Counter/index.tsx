import { useState } from "react";

import './style.scss'

function Counter() {
    const [count, setCount] = useState(0);

    return (
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        You clicked me {count} times
      </button>
    );
}

export default Counter
