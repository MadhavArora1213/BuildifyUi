import React from 'react';
import styled from 'styled-components';

const Checkbox7 = () => {
  return (
    <StyledWrapper>
      <label className="container">
        <input type="checkbox" />
        <div className="checkmark">
          <div className="mark" />
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
  }

  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 2em;
    width: 2em;
    border: 4px solid #7b68ee;
    border-radius: 999px;
  }

  .container input:checked ~ .checkmark {
    animation:
      bounce 2s ease,
      checkBorder 1s ease;
  }

  .mark {
    position: absolute;
    width: 0rem;
    height: 0rem;
    background-color: #7b68ee;
    border-radius: 999px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }

  .container input:checked ~ .checkmark .mark {
    background-color: #7b68ee;
    height: 2.1rem;
    width: 2.1rem;
    animation: bounce2 1s ease;
  }

  .container input:not(:checked) ~ .checkmark .mark {
    width: 0rem;
    height: 0rem;
    transition: all 0.1s linear;
  }

  @keyframes bounce {
    0%,
    25%,
    60%,
    80%,
    100% {
      transform: translateY(0);
    }

    20% {
      transform: translateY(-10px);
    }

    35% {
      transform: translateY(-5px);
    }
  }

  @keyframes bounce2 {
    0% {
      height: 0rem;
      width: 0rem;
      transform: translate(-50%, 0);
    }

    10% {
      height: 1.2rem;
      width: 1.2rem;
    }

    25% {
      height: 1.9rem;
    }

    50% {
      height: 1.2rem;
      transform: translate(-50%, -150px);
    }

    75% {
      height: 1.9rem;
    }

    85% {
      height: 1.2rem;
      width: 1.2rem;
    }

    95% {
      height: 2rem;
      width: 2rem;
    }
  }

  @keyframes checkBorder {
    0%,
    100% {
      border: 4px solid #7b68ee;
    }

    1% {
      border: 2px solid #7b68ee;
    }

    90% {
      border: 2px solid #7b68ee;
    }
  }`;

export default Checkbox7;
