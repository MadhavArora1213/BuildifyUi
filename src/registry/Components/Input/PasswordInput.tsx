import React from 'react';
import styled from 'styled-components';

const PasswordInput = () => {
  return (
    <StyledWrapper>
      <input type="password" name="text" className="input" placeholder="Enter your password!" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input {
   border: 2px solid #e8e8e8;
   padding: 15px;
   border-radius: 10px;
   background-color: #212121;
   font-size: small;
   font-weight: bold;
   text-align: center;
  }

  .input:focus {
   outline-color: white;
   background-color: #212121;
   color: #e8e8e8;
   box-shadow: 5px 5px #888888;
  }`;

export default PasswordInput;
