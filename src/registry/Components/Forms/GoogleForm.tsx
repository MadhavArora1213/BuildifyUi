import React from 'react';
import styled from 'styled-components';

const GoogleForm = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <input type="checkbox" id="error" />
        <input type="checkbox" id="submitted" />
        <div className="form form-heading">
          <div className="heading">Exam for David</div>
          <hr />
          <div className="error-text">* Indicates required question</div>
        </div>
        <div className="form q">
          <div className="question">
            <div className="title">
              <div className="text">
                <span>Should David be in charge of making exams?</span><span className="required">*</span>
              </div>
              <div className="points">
                <div className="pt">1 point</div>
                <div className="pt1">1/1</div>
                <div className="pt0">0/1</div>
              </div>
            </div>
            <input type="radio" id="q11" name="q1" />
            <label tabIndex={-1} htmlFor="q11">
              <div className="checkbox">
                <div className="checkbox-hover" />
                <div className="checkbox-inner" />
              </div>
              <div className="text">Yes</div>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#D93025" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </div>
            </label>
            <input type="radio" id="q12" name="q1" />
            <label tabIndex={-1} htmlFor="q12">
              <div className="checkbox">
                <div className="checkbox-hover" />
                <div className="checkbox-inner" />
              </div>
              <div className="text">No</div>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#1E8E3E" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
              </div>
            </label>
            <div className="correct-answer">
              <div className="text">Correct answer</div>
              <label>
                <div className="checkbox">
                  <div className="checkbox-hover" />
                  <div className="checkbox-inner" />
                </div>
                <div className="text">No</div>
              </label>
            </div>
            <div className="required-text">
              <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#FF5722" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
              </svg>
              <span>This is a required question</span>
            </div>
          </div>
        </div>
        <div className="buttons">
          <label htmlFor="error" id="error" className="btn btn-primary">Submit</label>
          <label id="dummy" className="btn btn-primary">Submit</label>
          <label htmlFor="submitted" id="submitted" className="btn btn-primary">
            Submit
          </label>
          <div className="btn btn-text">Clear form</div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .form {
    --text: rgb(32, 33, 36);
    position: relative;
    display: flex;
    flex-direction: column;
    width: 20em;
    gap: 10px;
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    border: 1px solid #dadce0;
    overflow: hidden;
  }

  .form-heading::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-color: rgb(103, 58, 183);
  }

  .form-heading {
    padding-bottom: 16px;
  }

  .heading {
    font-size: 1.5em;
  }

  .title {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.5em 0;
  }

  .title .text {
    color: var(--text);
    font-size: 12pt;
  }

  .title .points {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
    flex-shrink: 0;
  }

  .required {
    color: #f00;
    padding-left: 0.25em;
  }

  .wrapper input {
    display: none;
  }

  .form label {
    display: flex;
    align-items: center;
    gap: 0.75em;
    padding: 0.5em 0;
    font-size: 11pt;
    line-height: 15pt;
  }

  .form label .text {
    color: var(--text);
  }

  .form label .checkbox {
    position: relative;
    width: 20px;
    height: 20px;
    border: 2px solid #5f6368;
    border-radius: 50%;
    cursor: pointer;
  }

  .form label .checkbox-hover {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(103, 58, 183, 0);
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease;
  }

  .form label .checkbox:hover :where(.checkbox-hover) {
    background-color: rgba(103, 58, 183, 0.04);
    opacity: 1;
  }

  .form label:focus-visible .checkbox-hover,
  .form label:focus .checkbox-hover {
    background-color: rgba(103, 58, 183, 0.15);
    animation: huh 0.3s;
  }

  @keyframes huh {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(2);
      opacity: 1;
    }
  }

  .form label .checkbox-inner {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 5px solid rgb(103, 58, 183);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform ease 0.28s;
  }

  .form input:checked + label .checkbox {
    border-color: rgb(103, 58, 183);
  }

  .form input:checked + label .checkbox-inner {
    transform: translate(-50%, -50%) scale(1);
  }

  #submitted:checked ~ .form label {
    pointer-events: none;
  }

  #submitted:checked ~ .form label .checkbox {
    border-color: #9aa0a6;
  }

  #submitted:checked ~ .form input:checked + label .checkbox,
  #submitted:checked ~ .form input:checked + label .checkbox-inner {
    border-color: #5f6368;
  }

  #submitted:checked ~ .form label {
    padding: 0.5em;
    border-radius: 4px;
  }

  #submitted:checked ~ .form label .text {
    color: #70757a;
  }

  #submitted:checked ~ .form input:checked + label .text {
    color: #202124;
  }

  #submitted:checked ~ .form input:checked + label .icon {
    height: 24px;
    width: 24px;
    margin-left: auto;
  }

  #submitted:checked ~ .form #q11:checked + label {
    background: rgb(252, 232, 230);
  }

  #submitted:checked ~ .form #q12:checked + label {
    background: rgb(230, 244, 234);
  }

  #submitted:checked ~ .form:has(#q11:checked) .title .text {
    color: rgb(217, 48, 37);
  }

  #submitted:checked ~ .form:has(#q12:checked) .title .text {
    color: rgb(30, 142, 62);
  }

  #submitted:checked ~ .form .pt {
    display: none;
  }

  #submitted:checked ~ .form .points {
    color: rgb(32, 33, 36);
  }

  #submitted:not(:checked) ~ .form .pt0,
  #submitted:not(:checked) ~ .form .pt1 {
    display: none;
  }

  #submitted:checked ~ .form:has(#q11:checked) .pt1,
  #submitted:checked ~ .form:has(#q12:checked) .pt0 {
    display: none;
  }

  .correct-answer > .text {
    color: #70757a;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.25px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .correct-answer {
    display: none;
    margin-top: 12px;
  }

  #submitted:checked ~ .form:has(#q11:checked) .correct-answer {
    display: block;
  }

  .correct-answer label .checkbox {
    border-color: #5f6368 !important;
  }

  .correct-answer label .text {
    color: #202124 !important;
  }

  .correct-answer label .checkbox-inner {
    border-color: #5f6368;
    transform: translate(-50%, -50%) scale(1);
  }

  .form hr {
    position: relative;
    border: none;
    border-top: 1px solid rgb(218, 220, 224);
    left: -100%;
    width: 300%;
  }

  .required-text {
    display: none;
    margin-top: 8px;
    align-items: center;
    gap: 12px;
    color: rgb(217, 48, 37);
  }

  .error-text {
    color: rgb(217, 48, 37);
  }

  #error:checked ~ #submitted:not(:checked) ~ .form .required-text {
    display: flex;
  }

  #error:checked ~ #submitted:not(:checked) ~ .form.q {
    border-color: rgb(217, 48, 37);
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  #error:checked ~ .buttons #error,
  #error:not(:checked) ~ .buttons #dummy,
  .form:has(:checked) ~ .buttons #error,
  .form:has(:checked) ~ .buttons #dummy,
  .form.q:not(:has(:checked)) ~ .buttons #submitted {
    display: none;
  }

  #submitted:checked ~ .buttons {
    display: none;
  }

  .btn {
    display: block;
    border-radius: 4px;
    line-height: 36px;
    width: fit-content;
    cursor: pointer;
    font-weight: 500;
    user-select: none;
  }

  .btn-primary {
    background: rgb(103, 58, 183);
    padding: 0 24px;
    color: #fff;
  }

  .btn-primary:hover {
    box-shadow:
      0px 2px 1px -1px rgba(103, 58, 183, 0.2),
      0px 1px 1px 0px rgba(103, 58, 183, 0.14),
      0px 1px 3px 0px rgba(103, 58, 183, 0.12);
    background: #7349bd;
  }

  .btn-text {
    position: relative;
    color: rgb(103, 58, 183);
    background: rgba(66, 133, 244, 0);
    padding: 0 8px;
    overflow: hidden;
  }

  .btn-text:hover {
    background: rgba(66, 133, 244, 0.04);
  }

  .btn-text::before {
    content: "";
    position: absolute;
    background: radial-gradient(
      circle farthest-side,
      rgba(103, 58, 183, 0.15),
      rgba(103, 58, 183, 0.15) 80%,
      rgba(103, 58, 183, 0) 100%
    );
    top: 50%;
    left: 50%;
    width: 0px;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    transition:
      0.33s opacity,
      0s 0.33s width;
    opacity: 0;
  }

  .btn-text:hover:active::before,
  .btn-text:focus-visible::before {
    transition: 0.33s width;
    opacity: 1;
    width: 141%;
  }`;

export default GoogleForm;
