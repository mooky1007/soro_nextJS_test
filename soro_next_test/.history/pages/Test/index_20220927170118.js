import { Button } from 'bootstrap';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
    main: "mediumseagreen",
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