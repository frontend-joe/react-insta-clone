import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

const StyledButtonWrapper = styled.div`
  width: 33.33%;
  padding: ${(p) => (p.isMiddle ? "0 6px" : 0)};
`;

const StyledButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  font-size: 14px;
  border: 1px solid ${rgba("white", 0.1)};
  border-radius: 6px;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledButtonWrapper>
        <StyledButton>Edit Profile</StyledButton>
      </StyledButtonWrapper>
      <StyledButtonWrapper isMiddle>
        <StyledButton>Promotions</StyledButton>
      </StyledButtonWrapper>
      <StyledButtonWrapper>
        <StyledButton>Insights</StyledButton>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default Wrapper;
