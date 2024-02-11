import Home from "./Home";
import styled from "styled-components";
import Popular from "./Action";
import Romance from "./Romance";
import Animation from "./Animation";
import Horror from "./Horror";

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
