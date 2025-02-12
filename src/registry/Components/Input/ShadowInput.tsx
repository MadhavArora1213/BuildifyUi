import React from 'react';
import styled from 'styled-components';

const ShadowInput = () => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <input type="text" name="text" className="input" />
        <label className="label">Input title</label>
        <div className="top-line" />
        <div className="under-line" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input-container {
    position: relative;
    width: clamp(100px, 100%, 200px);
  }

  .input {
    padding: 10px;
    height: 40px;
    width: clamp(100px, 100%, 200px);
    border: 2px solid #0B2447;
    border-top: none;
    font-size: 16px;
    background: transparent;
    outline: none;
    box-shadow: 7px 7px 0px 0px #0B2447;
    transition: all 0.5s;
  }

  .input:focus {
    box-shadow: none;
    transition: all 0.5s;
  }

  .label {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #0B2447;
    transition: all 0.5s;
    transform: scale(0);
    z-index: -1;
  }

  .input-container .top-line {
    position: absolute;
    content: "";
    background-color: #0B2447;
    width: 100%;
    height: 2px;
    right: 0;
    top: 0;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus~.top-line {
    width: 35%;
    transition: all 0.5s;
  }

  .input-container .under-line {
    position: absolute;
    content: "";
    background-color: #0B2447;
    width: 0%;
    height: 2px;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus~.under-line {
    width: 100%;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus~.label {
    top: -10px;
    transform: scale(1);
    transition: all 0.5s;
  }`;

export default ShadowInput;
