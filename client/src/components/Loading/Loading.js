import React from 'react'
import ClockLoader from 'react-spinners/ClockLoader'
import styled from 'styled-components';
import { css } from "@emotion/core";


const Loading = (props) => {

    const override = css`
    display: block;
    background: black;
    margin: 0 auto;
    
  `;

    return (
        <Container>
        
        <Text> <h1>Personalising Mood </h1></Text>
        
        <ClockLoader color={'white'} loading={props.loading} size={50} />
 
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    width:100vw;
    background-color:black;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;


`
const Text = styled.div`
    margin-bottom:20px;
    color:white;
    h1 {
        color: #ffffff;
        opacity: .8;
        font-size: 2rem;
        font-family: Georgia, 'Times New Roman', serif;
        font-weight: 300;
        line-height: 58px;
        
}

`


export default Loading
