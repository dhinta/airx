import './Menu.css';
import Nav from '../nav/Nav';
import Subnav from '../subnav/Subnav';

const Menu = () => {
  return (
    <>
      <div className="container-fluid dark-bg px-0">
        <Nav />
        <Subnav />
      </div>
    </>
  );
};

export default Menu;
