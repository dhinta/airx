import styled from 'styled-components';

export const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0.5rem 0;
`;

export const StyledNav = styled.nav`
  a {
    padding: 0.5em;
    margin-right: 1em;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    position: relative;
  }

  a:hover {
    color: #fff;
  }

  a.active::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #ad8747;
    position: absolute;
    bottom: -1.25em;
    left: 0;
  }
`;
