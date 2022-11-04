import React, { useEffect, useMemo, useState, useCallback } from 'react';
import ChildA from './components/childA';
import ChildB from './components/childB';
import styles from './index.less';

const IndexPage = () => {
  const [count, setCount] = useState<number>(0);
  const [aName, setAName] = useState<string>('childA');
  const [bName, setBName] = useState<string>('childB');
  console.log('parent');

  // const clickEvent = () => {
  //   setAName(`childA${Math.random()}`);
  // };

  const aProps = {title: aName, count};

  const aPropsMemo = useMemo(() => aProps, []);

  const clickEvent = useCallback(() => {
    setAName(`childA${Math.random()}`);
    console.log('click event', aName);
  }, [aName]);

  return (
    // <div>
    //   <h1 className={styles.title}>Parent</h1>
    //   <button onClick={(e) => { setCount(count+1) }}>加1</button>
    //   <p>count: {count}</p>
    //   <ChildA name={aName}></ChildA>
    //   <ChildB name={bName}></ChildB>
    // </div>
    // <div>
    //   <h1 className={styles.title}>Parent</h1>
    //   <button onClick={(e) => { setCount(count+1) }}>加1</button>
    //   <p>count: {count}</p>
    //   <ChildA name={aName} event={clickEvent}></ChildA>
    //   <ChildB name={bName}></ChildB>
    // </div>
    <div>
      <h1 className={styles.title}>Parent</h1>
      <button onClick={(e) => { setCount(count+1) }}>加1</button>
      <p>count: {count}</p>
      <ChildA name={aPropsMemo} event={clickEvent} ></ChildA>
      <ChildB name={bName}></ChildB>
    </div>
  );
}

export default IndexPage;
