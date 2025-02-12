import React from 'react';
import styled from 'styled-components';

const ValueTabSelector = () => {
  return (
    <StyledWrapper>
      <div className="radio-input">
        <input defaultValue="value-1" name="value-radio" id="value-1" type="radio" />
        <label htmlFor="value-1">Value 1</label>
        <input defaultValue="value-2" name="value-radio" id="value-2" type="radio" />
        <label htmlFor="value-2">Value 2</label>
        <input defaultValue="value-3" name="value-radio" id="value-3" type="radio" />
        <label htmlFor="value-3">Value 3</label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-input {
    display: flex;
    flex-direction: row;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: white;
  }

  .radio-input input[type="radio"] {
    display: none;
  }

  .radio-input label {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #212121;
    border-radius: 5px;
    margin-right: 12px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  .radio-input label:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #ccc;
    transition: all 0.3s ease-in-out;
  }

  .radio-input input[type="radio"]:checked + label:before {
    background-color: green;
    top: 0;
  }

  .radio-input input[type="radio"]:checked + label {
    background-color: royalblue;
    color: #fff;
    border-color: rgb(129, 235, 129);
    animation: radio-translate 0.5s ease-in-out;
  }

  @keyframes radio-translate {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateX(0);
    }
  }`;

export default ValueTabSelector;
