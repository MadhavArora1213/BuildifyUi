import React from 'react';
import styled from 'styled-components';

const GridPattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: absolute; /* Ensure the container fills the viewport */
    inset: 0; /* Fill the entire viewport */
    overflow: hidden; /* Ensure no overflow */

    background: #000000;
    --gap: 5em;
    --line: 1px;
    --color: rgba(255, 255, 255, 0.2);

    background-image: linear-gradient(
        -90deg,
        transparent calc(var(--gap) - var(--line)),
        var(--color) calc(var(--gap) - var(--line) + 1px),
        var(--color) var(--gap)
      ),
      linear-gradient(
        0deg,
        transparent calc(var(--gap) - var(--line)),
        var(--color) calc(var(--gap) - var(--line) + 1px),
        var(--color) var(--gap)
      );
    background-size: var(--gap) var(--gap);
  }`;

export default GridPattern;
