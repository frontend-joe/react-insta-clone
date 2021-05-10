import React from "react";
import styled from "styled-components";
import ProfileTop from "./ProfileTop";
import ProfileMiddle from "./ProfileMiddle";
import ProfileBottom from "./ProfileBottom";

const StyledWrapper = styled.div`
  padding: 8px 16px;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <ProfileTop />
      <ProfileMiddle />
      <ProfileBottom />
    </StyledWrapper>
  );
};

export default Wrapper;
