import React from 'react';
import styled from 'styled-components';

const SimpleToggle: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="checkbox-wrapper-41">
        <input type="checkbox" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-wrapper-41 {
    --size: 100px;
  }

  .checkbox-wrapper-41 input[type="checkbox"] {
    -webkit-appearance: none;
    width: var(--size);
    height: calc(var(--size) / 2);
    background-color: #fff;
    border: 3px solid #222;
    border-radius: 30px 100px 100px 100px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    outline: none;
    cursor: pointer;
    position: relative;
    transition: all 0.5s;
  }

  .checkbox-wrapper-41 input[type="checkbox"]::before {
    content: "";
    position: absolute;
    width: calc(var(--size) / 2);
    height: calc(var(--size) / 2);
    left: 0;
    top: 50%;
    transform: translateY(-50%) scale(0.7);
    border: 3px solid #222;
    border-radius: 30px 100px 100px 100px;
    background-color: #fde881;
    box-sizing: border-box;
    transition: all 0.5s;
  }

  .checkbox-wrapper-41 input[type="checkbox"]:checked {
    background-color: #fde881;
    border-radius: 100px 100px 30px 100px;
  }

  .checkbox-wrapper-41 input[type="checkbox"]:checked::before {
    left: 50%;
    background-color: #fff;
    border-radius: 100px 100px 30px 100px;
  }`;

export default SimpleToggle;
