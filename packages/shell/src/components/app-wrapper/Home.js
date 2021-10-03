import { useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { mount } from '@airx-home/homeApp';

const Home = ({ config, setHomeConfig, navigationUrl }) => {
  const ref = useRef();
  let homeConfig;

  useEffect(() => {
    homeConfig = mount(ref.current, config, navigationUrl);
    setHomeConfig(homeConfig);
  }, []);

  return <div id="main-content" ref={ref}></div>;
};

Home.propTypes = {
  config: PropTypes.object,
  setHomeConfig: PropTypes.func,
  navigationUrl: PropTypes.string,
};

export default Home;
