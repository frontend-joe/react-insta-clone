import React from "react";
import styled from "styled-components";

import post1 from "assets/post1.png";
import post2 from "assets/post2.png";
import post3 from "assets/post3.png";
import post4 from "assets/post4.png";
import post5 from "assets/post5.png";
import post6 from "assets/post6.png";
import post7 from "assets/post7.png";
import post8 from "assets/post8.png";
import post9 from "assets/post9.png";
import post10 from "assets/post10.png";
import post11 from "assets/post11.png";
import post12 from "assets/post12.png";

const posts = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
];

const StyledPostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledPostImage = styled.img`
  flex: 0 0 33.33%;
  width: 33.33%;
`;

const Wrapper = () => {
  return (
    <StyledPostsList>
      {posts.map((post, index) => (
        <StyledPostImage key={`post-${index}`} src={post} />
      ))}
    </StyledPostsList>
  );
};

export default Wrapper;
