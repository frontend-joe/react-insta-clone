import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import story1 from "assets/story1.jpeg";
import story2 from "assets/story2.jpeg";
import story3 from "assets/story3.jpeg";
import story4 from "assets/story4.jpeg";
import story5 from "assets/story5.jpeg";

const stories = [
  { title: "milestones", src: story1 },
  { title: "sensei", src: story2 },
  { title: "react", src: story3 },
  { title: "mi", src: story4 },
  { title: "setup", src: story5 },
];

const StyledWrapper = styled.div`
  position: relative;
  height: 100px;
  overflow: hidden;

  @media only screen and (min-width: 600px) {
    height: 120px;
  }
`;

const StyledStoryList = styled.div`
  position: absolute;
  display: flex;
  padding-left: 16px;
`;

const StyledStoryBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 16px;
`;

const StyledStoryTitle = styled.div`
  font-size: 12px;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 6px;
  border: 1px solid ${rgba("white", 0.25)};
  padding: 4px;

  @media only screen and (min-width: 600px) {
    width: 70px;
    height: 70px;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledStoryList>
        {stories.map((img) => (
          <StyledStoryBlock key={img.title}>
            <StyledImage src={img.src} />
            <StyledStoryTitle>{img.title}</StyledStoryTitle>
          </StyledStoryBlock>
        ))}
      </StyledStoryList>
    </StyledWrapper>
  );
};

export default Wrapper;
