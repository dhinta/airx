import './Menu.css';
import Nav from '../nav/Nav';
import Subnav from '../subnav/Subnav';

const Menu = () => {
  return (
    <>
      <div className="container-fluid dark-bg border-bottom-white">
        <div className="container">
          <div className="row">
            <Nav />
          </div>
        </div>
      </div>
      <div className="container-fluid dark-bg py-2">
        <div className="container">
          <div className="row">
            <Subnav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
