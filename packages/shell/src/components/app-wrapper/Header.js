import { useRef, useEffect } from 'react';

import { mount } from '@airx-header/headerApp';

const Header = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);
  return <header ref={ref}></header>;
};

export default Header;
