import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Action({ fetchUrl }) {
  const [slidingImages, setSlidingImage] = useState([]);
  const [slide, setSlide] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSlidingImages = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`
        );
        const data = await response.json();
        const limitedResults = data.results.slice(0, 4);
        setSlidingImage(limitedResults);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error.message); // Set error state
      }
    };

    getSlidingImages();
  }, [fetchUrl]);

  const goToPreviousSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? slidingImages.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === slidingImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <ActionPage>
      <Images>
        <FaAngleLeft className="arrow arrow-left" onClick={goToPreviousSlide} />
        {slidingImages.map((movies, index) => (
          <div
            key={movies.id}
            className={index === slide ? "image" : "image-hide"}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
              alt={movies.title}
            />
          </div>
        ))}
        <FaAngleRight className="arrow arrow-right" onClick={goToNextSlide} />
        <Span>
          {slidingImages.map((movies, index) => (
            <button
              key={movies.id}
              className={index === slide ? "indicaters active" : "indicaters"}
              onClick={() => setSlide(index)}
            ></button>
          ))}
        </Span>
      </Images>
    </ActionPage>
  );
}

const ActionPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Images = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image img {
    border-radius: 1.5rem;
  }

  .image-hide {
    display: none;
  }

  .arrow {
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: white;
  }

  .arrow:hover {
    cursor: pointer;
  }

  .arrow-left {
    left: 1rem;
  }

  .arrow-right {
    right: 1rem;
  }
`;

const Span = styled.span`
  display: flex;
  position: absolute;
  bottom: 1rem;
  gap: 0.5rem;

  .indicaters {
    height: 0.5rem;
    width: 0.5rem;
    padding: 0;
    background: white;
    border-radius: 100%;
    border: 0px;
    cursor: pointer;
    background-color: gray;
  }

  .active {
    background-color: white;
  }
`;

export default Action;
