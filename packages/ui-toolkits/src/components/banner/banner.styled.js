import styled from 'styled-components';

export const StyledBannerContainer = styled.div`
  width: 100%;
  background-color: #11172b;
  /* display: flex; */
  /* flex: 1; */
  position: relative;
  overflow: hidden;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const StyledBannerList = styled.div`
  display: block;
  position: relative;
  height: 400px;
  transition: right 1s ease-in;
`;

export const StyledBanner = styled.div`
  display: block;
  float: left;
  flex-shrink: 0;
  /* white-space: nowrap; */
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

export const StyledBannerText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(17, 23, 43, 0.7);
  color: #fff;
  width: 400px;
  height: 250px;
  top: 20%;
  flex-direction: column;

  * {
    margin: .5rem 0;
  }

  &.left {
    left: 4%;
    float: left;
  }
  &.right {
    right: 6%;
    float: right;
  }
`;

export const StyledNavButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border: 2px solid rgb(17, 23, 43, 0.7);
  border-top: none;
  border-right: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  top: 50%;

  &.prev {
    left: 2%;
    transform: rotate(45deg);
  }
  &.next {
    right: 2%;
    transform: rotate(225deg);
  }
`;
