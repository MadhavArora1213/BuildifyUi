import React from 'react';
import styled from 'styled-components';

const LinkedButton = () => {
  return (
    <StyledWrapper>
      <div className="glow-button">
        <button className="bt">
          <div className="glow-holder">
            <div className="outer-glow" />
            <div className="inner-glow" />
          </div>
          <div className="button-content">
            <svg height="1em" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
            <p>Connect</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .glow-button button.bt {
    position: relative;
    height: 180px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .glow-button button.bt .button-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1f1f1f, #292929);
    color: white;
    font-weight: bold;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transition: 300ms;
  }

  .glow-button button.bt .button-content svg {
    height: 40px;
    fill: white;
    transition: 300ms;
  }

  .glow-button button.bt .glow-holder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .glow-button button.bt .glow-holder .outer-glow {
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(10, 102, 194, 0.2) 0%, rgba(0, 0, 0, 0) 80%);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .glow-button button.bt .glow-holder .inner-glow {
    position: absolute;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(10, 102, 194, 0.5) 0%, rgba(0, 0, 0, 0) 60%);
    border-radius: 50%;
  }

  .glow-button button.bt:hover .button-content {
    background: linear-gradient(135deg, #0a66c2, #144ab7);
    box-shadow: 0 0 30px rgba(10, 102, 194, 0.8);
  }

  .glow-button button.bt:hover .button-content svg {
    fill: #ffffff;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

export default LinkedButton;