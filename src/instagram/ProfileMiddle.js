import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  font-size: 14px;
`;

const StyledTitle = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

const StyledSubtitle = styled.div`
  color: ${rgba("white", 0.6)};
  margin-bottom: 6px;
`;

const StyledBioLine = styled.div`
  line-height: 1;
  margin-bottom: 6px;
`;

const StyledEmoji = styled.span`
  margin-right: 6px;
`;

const StyledLink = styled.a`
  color: #a4adb7;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Frontend Joe</StyledTitle>
      <StyledSubtitle>Digital Creator</StyledSubtitle>
      <StyledBioLine>
        <StyledEmoji>🦄</StyledEmoji> Frontend Developer
      </StyledBioLine>
      <StyledBioLine>
        <StyledEmoji>📖</StyledEmoji> Coding Tutorials & Setup Pics
      </StyledBioLine>
      <StyledBioLine>
        <StyledEmoji>⬇️</StyledEmoji> Dashboard App I’m building
      </StyledBioLine>
      <StyledLink>react-sensei.com</StyledLink>
    </StyledWrapper>
  );
};

export default Wrapper;
