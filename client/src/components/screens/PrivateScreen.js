import React from 'react'
import Header from './header';
import styled from 'styled-components';

const PrivateScreen = () => {
    return (
        <>
         <Header />
            <Wrapper>
           <Welcome>
               <Feel>

               </Feel>
           </Welcome>
           </Wrapper>

        </>
    )
}

const Wrapper = styled.div`
    height: 90vh;
    display: flex;
    width: 100vw;
    background: #159957;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    justify-content:center;
    align-items:center;

`

const Feel = styled.div`


`

const Welcome = styled.div`
    

`

export default PrivateScreen
