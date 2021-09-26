import styled from 'styled-components';

export const StyledFieldContainer = styled.div`
  padding: ${(props) => props.theme.padd};
  .MuiInputBase-input {
    padding: 6px 0 1px;
    color: ${(props) => props.theme.foregroundColor};
  }
  .MuiFormLabel-root {
    color: ${(props) => props.theme.labelColor};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }

  .MuiInputBase-root.MuiInput-root.MuiInput-underline {
    border-color: transparent;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    outline: none;
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-color: transparent;
    outline: none;
  }
  .MuiOutlinedInput-root {
    border-radius: 0;
  }
  .MuiAutocomplete-clearIndicator {
    display: none;
  }

  .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon
    .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {
    padding-right: 30px;
  }
  .MuiSvgIcon-root {
    font-size: 1em;
    fill: ${(props) => props.theme.foregroundColor};
  }
  .MuiInput-underline:before {
    border-color: transparent;
  }
  .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {
    padding: 9px 0 5px;
  }
  .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']
    .MuiAutocomplete-input {
    padding: 9.5px 4px 0;
  }
  input {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.foregroundColor};
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export const StyledButton = styled.button`
  width: 8em;
  height: 2.5em;
`;
