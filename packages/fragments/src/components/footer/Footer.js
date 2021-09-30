import { ThemeProvider } from 'styled-components';
import { PropTypes } from 'prop-types';

import Theme from '../styled/theme';
import { StyledWrapper } from '../styled/app.styled';
import { StyledFooter, StyledCopyright, StyledTagline } from './footer.styled';

const Footer = ({ selectedTheme }) => {
  const theme = Theme[selectedTheme];
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper className="mt-3 container-fluid py-3">
        <StyledFooter>
          <StyledCopyright>
            &copy; Airx <StyledTagline>Fly or die</StyledTagline>
          </StyledCopyright>
        </StyledFooter>
      </StyledWrapper>
    </ThemeProvider>
  );
};

Footer.propTypes = {
  selectedTheme: PropTypes.string,
};

Footer.defaultProps = {
  selectedTheme: 'default',
};

export default Footer;
