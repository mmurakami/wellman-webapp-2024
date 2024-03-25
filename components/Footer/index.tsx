'use client'

import styled from "styled-components";

const StyledBody = styled.div`
  &:before {
    background: var(--background-start-rgb);
  }
`;

const StyledCopyRight = styled.div`
  color: var(--colour-white);
  &:before {
    background: var(--colour-primary);
  }
`;

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      <StyledBody className="container colour-bg py-12">
        test
      </StyledBody>
      <StyledCopyRight className="container colour-bg py-4 text-sm text-center">
        &copy; {currentYear} Wellman Counselling Services. All rights reserved.
      </StyledCopyRight>
    </footer>
  );
};

export default Footer;



