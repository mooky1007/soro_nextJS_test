import React from 'react';
import styled from 'styled-components';

const TestBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  h1 {
    font-size: 21px;
  }
`;

const Test = (props) => {
    return(
        <TestBox>
           todo test
        </TestBox>
    );
            
};

export default Test;