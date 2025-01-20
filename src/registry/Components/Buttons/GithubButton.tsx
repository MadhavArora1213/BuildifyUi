import React from 'react';
import styled from 'styled-components';

const GithubButton = () => {
  return (
    <StyledWrapper>
      <div className="button-container">
        <button className="github-button">
          <div className="github-logo">
            <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
              <path fill="white" d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.49.5.09.68-.22.68-.46 0-.24-.01-.88-.01-1.72-2.78.61-3.37-1.34-3.37-1.34-.45-1.12-1.09-1.42-1.09-1.42-.9-.61.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02 1.36 2.31 3.56 1.64 4.42 1.25.14-.99.53-1.64.96-2.02-3.39-.38-6.95-1.7-6.95-7.53 0-1.66.59-3.02 1.56-4.1-.16-.38-.67-1.93.15-3.99 0 0 1.29-.41 4.24 1.55 1.23-.34 2.56-.5 3.87-.5s2.64.16 3.87.5c2.95-1.96 4.24-1.55 4.24-1.55.82 2.06.31 3.61.15 3.99.97 1.08 1.56 2.44 1.56 4.1 0 5.85-3.56 7.15-6.95 7.53.43.37.82 1.1.82 2.22v3.33c0 .25.18.55.68.46C21.13 20.16 24 16.41 24 12c0-5.52-4.48-10-12-10z" />
            </svg>
          </div>
          <div className="button-text">
            <span>GitHub</span>
            <span>Explore Projects</span>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .github-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 15px;
    border: 2px solid #6cc644;
    background-color: #181818;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
    transform-origin: center;
  }

  .github-button:hover {
    background-color: #24292f;
    border-color: #00a859;
    transform: scale(1.1) rotate(8deg);
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4), 12px 12px 20px rgba(0, 255, 0, 0.2);
  }

  .github-button:hover .github-logo {
    transform: translateY(-10px);
  }

  .github-button:hover .github-icon {
    width: 56px;
    height: 56px;
  }

  .github-button:hover .button-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 10px;
    transform: translateY(0px);
  }

  .github-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .github-icon {
    width: 48px;
    height: 48px;
    transition: all 0.3s;
  }

  .button-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s;
    color: white;
    transform: translateY(20px);
  }

  .button-text span:first-child {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 4px;
  }

  .button-text span:last-child {
    font-size: 16px;
    font-weight: bold;
  }

  @keyframes swipeRight {
    100% {
      transform: translateX(200%) skew(-45deg);
    }
  }

  @keyframes swipeLeft {
    100% {
      transform: translateX(-200%) skew(-45deg);
    }
  }
`;

export default GithubButton;
