import { useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { mount } from '@airx-header/headerApp';

const Header = ({ config, setHeaderConfig, navigationUrl }) => {
  const ref = useRef();
  useEffect(() => {
    const headerConfig = mount(ref.current, config, navigationUrl);
    setHeaderConfig(headerConfig);
  }, []);
  return <header ref={ref}></header>;
};

Header.propTypes = {
  config: PropTypes.object,
  setHeaderConfig: PropTypes.func,
  navigationUrl: PropTypes.string,
};

export default Header;
