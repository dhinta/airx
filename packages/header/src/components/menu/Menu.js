import './Menu.css';
import Nav from '../nav/Nav';
import Subnav from '../subnav/Subnav';

const Menu = () => {
  return (
    <>
      <div className="container-fluid dark-bg border-bottom-white">
        <Nav />
      </div>
      <div className="container-fluid dark-bg py-2">
        <Subnav />
      </div>
    </>
  );
};

export default Menu;
