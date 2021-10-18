import { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';

import Menu from './menu/Menu';
import { getCookie, setCookie } from '../services/cookie.service';
import AcceptCookies from './accept-cookies/AcceptCookies';
import withModal from './hoc/withModal';

const App = ({ history }) => {
  const [visited, setVisited] = useState(true);
  useEffect(() => {
    setVisited(!!getCookie('visited'));
  }, []);
  const ModalAcceptCookie = withModal(AcceptCookies);
  const modalConfig = {
    title: 'Accept Our Cookies',
    onClose() {
      setVisited(true);
      setCookie('visited', true);
    },
  };
  return (
    <>
      <Router history={history}>
        <Menu />
      </Router>
      {!visited
        ? createPortal(<ModalAcceptCookie {...modalConfig} />, document.body)
        : null}
    </>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
