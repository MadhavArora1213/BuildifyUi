import React from 'react';
import styled from 'styled-components';

const Checkbox4 = () => {
  return (
    <StyledWrapper>
      <div className="checkbox-wrapper-31">
        <input defaultChecked type="checkbox" />
        <svg viewBox="0 0 35.6 35.6">
          <circle className="background" cx="17.8" cy="17.8" r="17.8" />
          <circle className="stroke" cx="17.8" cy="17.8" r="14.37" />
          <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87" />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-wrapper-31:hover .check {
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-31 {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
  }

  .checkbox-wrapper-31 .background {
    fill: #ccc;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 .stroke {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    stroke-dashoffset: 100;
    stroke-dasharray: 100;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 .check {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    stroke-dashoffset: 22;
    stroke-dasharray: 22;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }

  .checkbox-wrapper-31 input[type=checkbox] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    opacity: 0;
    -appearance: none;
    -webkit-appearance: none;
  }

  .checkbox-wrapper-31 input[type=checkbox]:hover {
    cursor: pointer;
  }

  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .background {
    fill: #6cbe45;
  }

  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .stroke {
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .check {
    stroke-dashoffset: 0;
  }`;

export default Checkbox4;
