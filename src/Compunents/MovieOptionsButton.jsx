import React from "react";
import styled from "styled-components";
import { FaFire } from "react-icons/fa6";
import { LuSwords } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { TbPumpkinScary } from "react-icons/tb";

function MovieOptionsButton() {
  return (
    <MovieOptionsButtonSection>
      <Buttons>
        <div className="trending">
          <FaFire className="icon" />
          <Button type="Button">Trending</Button>
        </div>

        <div className="action">
          <LuSwords className="icon" />
          <Button type="Button">Action</Button>
        </div>

        <div className="romance">
          <FaHeart className="icon" />
          <Button type="Button">Romance</Button>
        </div>

        <div className="animation">
          <GiBearFace className="icon" />
          <Button type="Button">Animation</Button>
        </div>

        <div className="horror">
          <TbPumpkinScary className="icon" />
          <Button type="Button">Horror</Button>
        </div>
      </Buttons>
    </MovieOptionsButtonSection>
  );
}

const MovieOptionsButtonSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  .trending,
  .action,
  .romance,
  .animation,
  .horror {
    height: 7rem;
    width: 17rem;
    border-radius: 1.8rem;
    border: none;
    background: #d9d9d9;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;

const Button = styled.button`
  background: #d9d9d9;
  border: none;
  background: #d9d9d9;
  font-size: 2rem;
  cursor: pointer;
`;

export default MovieOptionsButton;
