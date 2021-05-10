import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTab = styled.div`
  width: 33.33%;
  height: 40px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid
    ${(p) => (p.isActive ? rgba("white", 0.35) : "transparent")};
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledTab isActive>
        <i className="uil uil-table"></i>
      </StyledTab>
      <StyledTab>
        <i className="uil uil-play"></i>
      </StyledTab>
      <StyledTab>
        <i className="uil uil-user-square"></i>
      </StyledTab>
    </StyledWrapper>
  );
};

export default Wrapper;
