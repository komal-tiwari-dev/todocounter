import React from "react";
import styles from "./counter.module.css";
const Counter = ({count1}) => {
  // sample value to be replaced
  const [count,setCount]=React.useState(count1)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button className={styles.but}
        data-cy="task-counter-increment-button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <span data-cy="task-counter-value" className={styles.count}>{count}</span>
      <button className={styles.but}
        data-cy="task-counter-decrement-button"
        onClick={() => count>0?setCount(count-1):setCount(0)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
