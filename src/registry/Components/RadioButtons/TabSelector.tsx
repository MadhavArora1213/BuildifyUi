import React from 'react';
import styled from 'styled-components';

const TabSelector = () => {
  return (
    <StyledWrapper>
      <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" defaultChecked />
          <span className="name">HTML</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">React</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">Vue</span>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-inputs {
    position: relative;
    display: flex;
    border-radius: 0.5rem;
    background-color: #70c489;
    box-sizing: border-box;
    font-size: 14px;
    width: 90%;
    padding: 1rem 1rem 0 1rem;
  }

  .radio-inputs .radio input {
    display: none;
  }

  .radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border: none;
    padding: 0.5rem 0.8rem;
    color: ;
    transition: all 0.15s ease-in-out;
    position: relative;
  }

  .radio-inputs .radio input:checked + .name {
    background-color: #e8e8e8;
    font-weight: 600;
  }
  .radio-inputs .radio input + .name:hover {
    color: #fff;
  }
  .radio-inputs .radio input:checked + .name:hover {
    color: #1d1d29;
  }

  .radio-inputs .radio input:checked + .name::after,
  .radio-inputs .radio input:checked + .name::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #70c489;
    bottom: 0;
  }

  .radio-inputs .radio input:checked + .name::after {
    right: -10px;
    border-bottom-left-radius: 300px;
    box-shadow: -3px 3px 0px 3px #e8e8e8;
  }
  .radio-inputs .radio input:checked + .name::before {
    left: -10px;
    border-bottom-right-radius: 300px;
    box-shadow: 3px 3px 0px 3px #e8e8e8;
  }`;

export default TabSelector;
