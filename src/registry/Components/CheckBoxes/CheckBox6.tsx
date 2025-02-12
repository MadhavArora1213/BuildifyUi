import React from 'react';
import styled from 'styled-components';

const Checkbox6 = () => {
  return (
    <StyledWrapper>
      <label className="checkboxLabel" htmlFor="checkbox">
        <input id="checkbox" name="checkbox" type="checkbox" />
        <span id="bar1" className="bar" />
        <span id="bar2" className="bar" />
        <span id="bar3" className="bar" />
        <span id="bar4" className="bar" />
        <span id="bar5" className="bar" />
        <span id="bar6" className="bar" />
        <span id="bar7" className="bar" />
        <span id="bar8" className="bar" />
        <span id="nut1" className="nut" />
        <span id="nut2" className="nut" />
        <span id="nut3" className="nut" />
        <span id="nut4" className="nut" />
        <span id="nut5" className="nut" />
        <span id="nut6" className="nut" />
        <span id="nut7" className="nut" />
        <span id="nut8" className="nut" />
        <span className="cover" />
        <span className="cover2">
          <div className="inCover2">
            <div className="rainbow">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </span>
        <svg className="lock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
          <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
          <g id="SVGRepo_iconCarrier">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#2A3439" d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" />
          </g>
        </svg>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkboxLabel {
    --rotate-offset: 45deg;
    --time-offset: 200ms;
    --translate-offset: 1rem;
    --delay: 250ms;
    --total-duration: calc(var(--time-offset) + var(--delay) * 7);

    position: relative;
    height: 3rem;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform var(--total-duration) ease-in-out;
  }

  .bar {
    position: absolute;
    height: 3rem;
    width: 0.25rem;
    border-radius: 0.125rem;
    background-color: white;
    top: -50%;
    transform-origin: bottom;
    z-index: 0;
  }

  #bar1 {
    rotate: calc(var(--rotate-offset));
    transition: all var(--time-offset) ease-in;
    transition-delay: calc(var(--delay) * 0);
    transform: translateY(calc(var(--translate-offset) * -1));
  }
  #bar2 {
    rotate: calc(var(--rotate-offset) * 2);
    transition: all var(--time-offset) ease-in;
    transition-delay: calc(var(--delay) * 1);
    transform: translateY(calc(var(--translate-offset) * -1));
  }
  #bar3 {
    rotate: calc(var(--rotate-offset) * 3);
    transition: all var(--time-offset) ease-in;
    transition-delay: calc(var(--delay) * 2);
    transform: translateY(calc(var(--translate-offset) * -1));
  }
  #bar4 {
    rotate: calc(var(--rotate-offset) * 4);
    transition: all var(--time-offset) ease-in;
    transition-delay: calc(var(--delay) * 3);
    transform: translateY(calc(var(--translate-offset) * -1));
  }
  #bar5 {
    rotate: calc(var(--rotate-offset) * 5);
    transition: all var(--time-offset) ease-in;
    transition-delay: calc(var(--delay) * 4);
    transform: translateY(calc(var(--translate-offset) * -1));
  }
  #bar6 {
    rotate: calc(var(--rotate-offset) * 6);
    transition: all var(--time-offset) ease-in;
    transition-delay: calc(var(--delay) * 5);
    transform: translateY(calc(var(--translate-offset) * -1));
  }
  #bar7 {
    rotate: calc(var(--rotate-offset) * 7);
    transition: all var(--time-offset) ease-in;
    transition-delay: calc(var(--delay) * 6);
    transform: translateY(calc(var(--translate-offset) * -1));
  }
  #bar8 {
    rotate: calc(var(--rotate-offset) * 8);
    transition: all var(--time-offset) ease-in;
    transition-delay: calc(var(--delay) * 7);
    transform: translateY(calc(var(--translate-offset) * -1));
  }

  #checkbox:checked ~ #bar1 {
    transform: translateY(0);
    background-color: #ffadad;
  }
  #checkbox:checked ~ #bar2 {
    transform: translateY(0);
    background-color: #ffd6a5;
  }
  #checkbox:checked ~ #bar3 {
    transform: translateY(0);
    background-color: #fdffb6;
  }
  #checkbox:checked ~ #bar4 {
    transform: translateY(0);
    background-color: #caffbf;
  }
  #checkbox:checked ~ #bar5 {
    transform: translateY(0);
    background-color: #9bf6ff;
  }
  #checkbox:checked ~ #bar6 {
    transform: translateY(0);
    background-color: #a0c4ff;
  }
  #checkbox:checked ~ #bar7 {
    transform: translateY(0);
    background-color: #bdb2ff;
  }
  #checkbox:checked ~ #bar8 {
    transform: translateY(0);
    background-color: #ffc6ff;
  }

  .cover {
    height: 4rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #2a3439;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .checkboxLabel:has(:checked) {
    transform: rotate(-360deg);
  }

  .cover2 {
    height: 2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #91a3b0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline-width: 0.25rem;
    outline: solid;
    outline-color: #b2ffff;
  }

  .inCover2 {
    height: 100%;
    aspect-ratio: 1/1;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }

  .inCover2 .rainbow {
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .rainbow div {
    flex: 1;
    width: 100%;
  }

  .rainbow div:nth-child(1) {
    background-color: #ffadad;
  }
  .rainbow div:nth-child(2) {
    background-color: #ffd6a5;
  }
  .rainbow div:nth-child(3) {
    background-color: #fdffb6;
  }
  .rainbow div:nth-child(4) {
    background-color: #caffbf;
  }
  .rainbow div:nth-child(5) {
    background-color: #9bf6ff;
  }
  .rainbow div:nth-child(6) {
    background-color: #a0c4ff;
  }
  .rainbow div:nth-child(7) {
    background-color: #bdb2ff;
  }

  .nut {
    height: 0.3rem;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 0px;
    transform: translateY(-5px);
    transform-origin: 50% 500%;
  }

  #nut1 {
    rotate: calc(var(--rotate-offset));
  }
  #nut2 {
    rotate: calc(var(--rotate-offset) * 2);
  }
  #nut3 {
    rotate: calc(var(--rotate-offset) * 3);
  }
  #nut4 {
    rotate: calc(var(--rotate-offset) * 4);
  }
  #nut5 {
    rotate: calc(var(--rotate-offset) * 5);
  }
  #nut6 {
    rotate: calc(var(--rotate-offset) * 6);
  }
  #nut7 {
    rotate: calc(var(--rotate-offset) * 7);
  }
  #nut8 {
    rotate: calc(var(--rotate-offset) * 8);
  }

  .lock {
    position: absolute;
    height: 1.5rem;
    aspect-ratio: 1/1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 200ms ease-in;
    transition-delay: var(--total-duration);
  }

  #checkbox:checked ~ .lock {
    opacity: 1;
  }`;

export default Checkbox6;
