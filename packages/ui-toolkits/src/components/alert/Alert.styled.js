import styled from 'styled-components';

const StyledAlert = styled.div`
  width: 100%;
  padding: 0.5em;
  font-size: 13px;
  font-weight: 500;
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    position: absolute;
    left: 0.5em;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const StyledSuccessAlert = styled(StyledAlert)`
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
  padding-left: 1em;
`;

export const StyledErrorAlert = styled(StyledAlert)`
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
`;

export const StyledInfoAlert = styled(StyledAlert)`
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
`;
