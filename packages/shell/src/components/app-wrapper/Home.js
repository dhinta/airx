import { useRef, useEffect } from 'react';

import { mount } from '@airx-home/homeApp';

const Home = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div id="main-content" ref={ref}></div>;
};

export default Home;
