import React, { useEffect, useMemo, useState, memo } from 'react';
import styles from '../index.less';

interface ChildProps {
  name?: any;
  event?: Function;
}

const ChildA = (props: ChildProps) => {
  const [count, setCount] = useState<number>(0);

  console.log('我是子组件A');

  return (
    <div>
      <h1 className={styles.title} onClick={() => props.event && props.event()}>{'A'}</h1>
      <button onClick={(e) => { setCount(count+1) }}>加1</button>
      <p>count: {count}</p>
    </div>
  );
}

export default memo(ChildA);
