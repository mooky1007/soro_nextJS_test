import { Button } from 'bootstrap';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
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
            <Button>normal btn</Button>
           <ThemeProvider theme={theme}>
                <Button>themed btn</Button>
            </ThemeProvider>
        </div>

    );
            
};

export default Test;