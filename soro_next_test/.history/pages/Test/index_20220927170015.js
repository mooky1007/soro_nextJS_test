import { Button } from 'bootstrap';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';



const Test = (props) => {
    return(

           <ThemeProvider>
                <Button>themed</Button>
            </ThemeProvider>

    );
            
};

export default Test;