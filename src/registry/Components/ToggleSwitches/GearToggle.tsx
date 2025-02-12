import React from 'react';
import styled from 'styled-components';

const GearToggle = () => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" className="chk" />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 1.2em;
    height: 3.3em;
  }

  /* Hide default HTML checkbox */
  .switch .chk {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 5px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: .5em;
    width: 2.4em;
    border-radius: 5px;
    left: -0.6em;
    top: 0.2em;
    background-color: white;
    box-shadow: 0 6px 7px rgba(0,0,0,0.3);
    transition: .4s;
  }

  .slider:before, .slider:after {
    content: "";
    display: block;
  }

  .slider:after {
    background: linear-gradient(transparent 50%, rgba(255, 255, 255, 0.15) 0) 0 50% / 50% 100%,
  		repeating-linear-gradient(90deg,rgb(255, 255, 255) 0,rgb(255, 255, 255),rgb(255, 255, 255) 20%,rgb(255, 255, 255) 20%,rgb(255, 255, 255) 40%) 0 50% / 50% 100%,
  		radial-gradient(circle at 50% 50%,rgb(255, 255, 255) 25%, transparent 26%);
    background-repeat: no-repeat;
    border: 0.25em solid transparent;
    border-left: 0.4em solid #ffffff;
    border-right: 0 solid transparent;
    transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    transform: translateX(-22.5%) rotate(90deg);
    transform-origin: 25% 50%;
    position: relative;
    top: 0.5em;
    left: 0.55em;
    width: 2em;
    height: 1em;
    box-sizing: border-box;
  }

  .chk:checked + .slider {
    background-color: limegreen;
  }

  .chk:focus + .slider {
    box-shadow: 0 0 1px limegreen;
  }

  .chk:checked + .slider:before {
    transform: translateY(2.3em);
  }

  .chk:checked + .slider:after {
    transform: rotateZ(90deg) rotateY(180deg) translateY(0.45em) translateX(-1.4em);
  }`;

export default GearToggle;
