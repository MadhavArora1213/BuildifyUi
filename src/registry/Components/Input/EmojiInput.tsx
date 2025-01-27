import React from 'react';
import styled from 'styled-components';

const EmojiInput = () => {
  return (
    <StyledWrapper>
      <div className="input-wrapper">
        <input className="input" name="text" placeholder="Type here..." type="text" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Fancy-ass Input Styling 10.0 - The Emoji Extravaganza */
  .input-wrapper {
    position: relative;
    width: 50%;
    max-width: 300px;
    padding: 3px;
    border-radius: 1.7rem;
    overflow: hidden;
  }

  .input-wrapper input {
    background-color: #f5f5f5;
    border: 2px solid #ddd;
    padding: 1.2rem 1rem 1.2rem 3rem; /* Increased left padding for emoji */
    font-size: 1.1rem;
    width: 100%;
    border-radius: 1.5rem;
    color: #ff7f7f;
    box-shadow: 0 0.4rem #dfd9d9, inset 0 0 0 transparent;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    z-index: 2;
  }

  .input-wrapper input:focus {
    outline: none;
    border-color: #4a90e2; /* Changed to blue */
    box-shadow: 0 0.6rem #dfd9d9, 0 0 15px rgba(74, 144, 226, 0.7); /* Blue glow */
    transform: translateY(-3px) scale(1.01);
  }

  .input-wrapper input::placeholder {
    color: #a0c0e8; /* Lighter blue for placeholder */
    transition: all 0.3s ease;
  }

  .input-wrapper input:focus::placeholder {
    opacity: 0;
    transform: translateX(10px);
  }

  /* Emoji styles */
  .input-wrapper::after {
    content: "😎";
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    z-index: 3;
    transition: all 0.3s ease;
  }

  /* Emoji animations */
  @keyframes dance {
    0%,
    100% {
      transform: translateY(-50%) rotate(0deg);
    }
    25% {
      transform: translateY(-50%) rotate(-20deg) scale(1.1);
    }
    75% {
      transform: translateY(-50%) rotate(20deg) scale(1.1);
    }
  }

  .input-wrapper:hover::after {
    animation: dance 0.5s ease infinite;
  }

  .input-wrapper:focus-within::after {
    content: "😂";
    animation: dance 0.3s ease infinite;
  }

  .input-wrapper input::placeholder {
    color: #ccc;
    transition: all 0.3s ease;
  }

  .input-wrapper input:focus::placeholder {
    opacity: 0;
    transform: translateX(10px);
  }

  /* Psychedelic background effect */
  .input-wrapper::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      #4a90e2,
      #6aa9e9,
      #8bc1f0,
      #add9f7,
      #d0f0ff,
      #add9f7,
      #8bc1f0,
      #6aa9e9,
      #4a90e2
    );
    animation: rotate 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .input-wrapper:hover::before,
  .input-wrapper:focus-within::before {
    opacity: 1;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  /* Shockwave effect on focus */
  @keyframes shockwave {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 127, 127, 0.4);
    }
    70% {
      transform: scale(1.02);
      box-shadow: 0 0 0 20px rgba(255, 127, 127, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 127, 127, 0);
    }
  }

  .input-wrapper:focus-within {
    animation: shockwave 0.5s ease-out;
  }

  /* Floating label effect */
  .input-wrapper {
    --label-size: 0.8rem;
    --label-transform: translateY(-170%) scale(0.8);
  }

  .input-wrapper input:placeholder-shown + label {
    transform: translateY(-50%);
    font-size: 1rem;
  }

  .input-wrapper label {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: var(--label-transform);
    font-size: var(--label-size);
    color: #ff7f7f;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 3;
  }

  .input-wrapper input:not(:placeholder-shown) + label,
  .input-wrapper input:focus + label {
    transform: var(--label-transform);
    font-size: var(--label-size);
  }`;

export default EmojiInput;
