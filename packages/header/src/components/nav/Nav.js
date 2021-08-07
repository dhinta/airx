import './Nav.css';
import Logo from '../logo/Logo';

const Nav = () => {
  return (
    <div className="menu-container py-2">
      <Logo />
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a href="#">Book</a>
        <a href="#">Flight Status</a>
        <a href="#">Contact</a>
        <a href="#">About Airx</a>
      </nav>
    </div>
  );
};

export default Nav;
