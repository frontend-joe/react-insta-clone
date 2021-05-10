import styled from "styled-components";
import Profile from "./Profile";
import Stories from "./Stories";
import Tabs from "./Tabs";
import Grid from "./Grid";
import Topbar from "./Topbar";

const StyledWrapper = styled.div`
  width: 100%;
  background: black;

  @media only screen and (min-width: 600px) {
    margin: 0 auto;
    width: 500px;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <Topbar />
      <Profile />
      <Stories />
      <Tabs />
      <Grid />
    </StyledWrapper>
  );
};

export default Wrapper;
