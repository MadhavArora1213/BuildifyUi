import React from 'react';
import styled from 'styled-components';

const Checkbox5 = () => {
  return (
    <StyledWrapper>
      <div>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox" />
          <div className="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <span className="container" />
          One</label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox" />
          <div className="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <span className="container" />
          Two</label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox" />
          <div className="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <span className="container" />
          Three</label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox" />
          <div className="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
          <span className="container" />
          Four</label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-label {
    font-size: 22px;
    color: #fefefe;
    padding: 10px 50px 10px 5px;
    font-family: Arial, Helvetica, sans-serif;
    user-select: none;
    display: flex;
    position: relative;
    align-items: center;
    transition: all 0.3s;
  }

  .checkbox {
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-right: -22px;
    appearance: none;
    border-radius: 5px;
    background-color: #64ccc5;
    z-index: 2;
    transition: all 0.3s;
  }

  .container {
    width: 35px;
    height: 35px;
    position: relative;
    top: 4px;
    left: -8%;
    border-radius: 5px;
    background-color: #dafffb;
    transition: all 0.3s;
  }

  .checkbox::before {
    content: "";
    background-color: #ffc8c8;
    position: relative;
    display: flex;
    top: 45%;
    left: 50%;
    width: 55px;
    height: 3px;
    border-radius: 25px;
    transform: translate(100px, 0px) scale(0);
    transition: ease-out 0.15s;
  }

  .checkbox:checked::before {
    transform: translateX(2em);
    top: 12px;
    transition: ease-out 0.15s;
  }

  .checkbox:hover {
    transform: translate(4px, 4px);
    transition: ease-out 0.15s;
    background-color: #ffc8c8;
  }

  .checkbox:checked {
    transform: translate(4px, 4px);
    transition: ease-out 0.15s;
    background-color: #ffc8c8;
  }

  .svg-icon {
    position: absolute;
    width: 25px;
    height: 25px;
    display: flex;
    z-index: 3;
    top: 35%;
    left: 11%;
    color: #fefefe;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    transform: rotate(0deg) scale(0);
    transition: ease-in 0.2s;
  }

  .checkbox:checked ~ .svg-icon {
    transform: rotate(360deg) scale(1);
    transition: ease-in 0.2s;
  }`;

export default Checkbox5;
