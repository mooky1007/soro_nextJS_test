import { Button } from 'bootstrap';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';



const Test = (props) => {
    return(

        <div>
           <ThemeProvider>
                <Button>themed</Button>
            </ThemeProvider>
        </div>

    );
            
};

export default Test;