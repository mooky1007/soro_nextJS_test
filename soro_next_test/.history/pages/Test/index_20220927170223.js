import { Button } from 'bootstrap';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
    main: "palevioletred",
  };
  

const Test = (props) => {
    return(

        <div>
            <button>normal btn</button>
           <ThemeProvider theme={theme}>
                <button>themed btn</button>
            </ThemeProvider>
        </div>

    );
            
};

export default Test;