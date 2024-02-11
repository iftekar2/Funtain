import Home from "./HomeSection/Trending";
import styled from "styled-components";
import Popular from "./HomeSection/Action";
import Romance from "./HomeSection/Romance";
import Animation from "./HomeSection/Animation";
import Horror from "./HomeSection/Horror";

function SlidingMovies() {
  return (
    <SlidingMoviesSection>
      <Home />
      <Popular />
      <Romance />
      <Animation />
      <Horror />
    </SlidingMoviesSection>
  );
}

const SlidingMoviesSection = styled.div`
margin-top: 0.5rem; 
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 1.8rem;
  width: 100%;
  }
`;

export default SlidingMovies;
