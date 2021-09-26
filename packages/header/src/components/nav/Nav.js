import { NavLink } from 'react-router-dom';

import { StyledMenuContainer, StyledNav } from './nav.styled';
import Logo from '../logo/Logo';

const links = [
  {
    to: '/',
    linkText: 'Book',
    exact: true,
  },
  {
    to: '/flight-status',
    linkText: 'Flight Status',
    exact: false,
  },
  {
    to: '/contact',
    linkText: 'Contact',
    exact: false,
  },
  {
    to: '/about-us',
    linkText: 'About Airx',
    exact: false,
  },
];

const Nav = () => {
  const getLinks = () => {
    return links.map((link, index) => {
      return (
        <NavLink
          to={link.to}
          activeClassName="active"
          key={index}
          exact={link.exact}
        >
          {link.linkText}
        </NavLink>
      );
    });
  };
  return (
    <div className="border-bottom-white w-100">
      <div className="container">
        <div className="row">
          <StyledMenuContainer>
            <Logo />
            <StyledNav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              {getLinks()}
            </StyledNav>
          </StyledMenuContainer>
        </div>
      </div>
    </div>
  );
};

export default Nav;
