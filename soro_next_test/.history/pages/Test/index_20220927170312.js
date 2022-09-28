import { Button } from 'bootstrap';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Buttons = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

const theme = {
    main: "palevioletred",
  };
  

const Test = (props) => {
    return(

        <div>
            <Buttons>normal btn</Buttons>
           <ThemeProvider theme={theme}>
                <Buttons>themed btn</Buttons>
            </ThemeProvider>
        </div>

    );
            
};

export default Test;