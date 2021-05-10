import React from "react";
import styled from "styled-components";
import avatar from "assets/avatar.jpeg";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StyledAvatarWrapper = styled.div`
  flex: 0 0 80px;
  border: 2px solid ${rgba("white", 0.25)};
  border-radius: 50%;
  padding: 3px;
  width: 80px;
  height: 80px;
`;

const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const StyledStatList = styled.div`
  display: flex;
  margin-right: 10px;
`;

const StyledStatListBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 12px;
  width: 70px;

  &:first-child {
    margin: 0;
  }
`;

const StyledStatLabel = styled.div`
  font-size: 14px;
`;

const StyledStatValue = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledAvatarWrapper>
        <StyledAvatar src={avatar} />
      </StyledAvatarWrapper>
      <StyledStatList>
        <StyledStatListBlock>
          <StyledStatValue>373</StyledStatValue>
          <StyledStatLabel>Posts</StyledStatLabel>
        </StyledStatListBlock>
        <StyledStatListBlock>
          <StyledStatValue>61.7 k</StyledStatValue>
          <StyledStatLabel>Followers</StyledStatLabel>
        </StyledStatListBlock>
        <StyledStatListBlock>
          <StyledStatValue>504</StyledStatValue>
          <StyledStatLabel>Following</StyledStatLabel>
        </StyledStatListBlock>
      </StyledStatList>
    </StyledWrapper>
  );
};

export default Wrapper;
