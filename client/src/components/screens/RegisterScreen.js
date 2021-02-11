import React from 'react'
import styled from 'styled-components';
import bgImg from '../../images/background.png'
import logo from '../../images/logo.svg'
const RegisterScreen = () => {
    return (
       <Container>
           <Wrapper>
               <SideBar />
               <Main />
           <h1>Test</h1>
           </Wrapper>
       </Container>
    )
}

const SideBar = () => {
    return (
        <SideBarContainer>
            <LogoWrapper>
                <img src={logo} alt="" />
                <h3>
                  mood  
                </h3>
            </LogoWrapper>

            <Form>
                <h3>Sign Up</h3>
                <Input placeholder = "Full Name"/>
                <Input type="email" placeholder = "Email"/>
                <Input type="password" placeholder = "Password"/>
                <Input type="password" placeholder = "Confirm Password"/>

            </Form>
           
        </SideBarContainer>
    )
}

const Input = ({type, placeholder}) => {
    return (
        <div>
            <InputContainer>
            <StyledInput placeholder={placeholder && placeholder}type = {type ? type:"text"} required autoComplete="off" />
            <Status />
            </InputContainer>
        </div>
    )
}



const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const StyledInput = styled.input`
    width:80%;
    max-width:350px;
    min-width:250px;
    height:40px;
    border:none;
    margin:0.5rem 0;
    background-color:#f5f5f5;
    box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
    border-radius:8px;
    padding:0 1rem;
    transition:0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }
`

const Form = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    h3 {
        color:#666666;
        margin-bottom:2rem;
    }

`
const Status = styled.div`
    height:10px;
    width:10px;
    background:#9d9d9d;
    border-radius:10px;
    margin-left:1rem;

    ${StyledInput}:focus + & {
        background:#ffa689;
    }

    ${StyledInput}:invalid + & {
        background:#fe2f75;
    }

    ${StyledInput}:valid + & {
        background:#70edb9;
    }

`

const SideBarContainer = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgba(255,255,255,0.8);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:space-evenly;
    padding:0 20rem;
`

const Main = () => {
    return (
        <MainContainer>
            <h1>Join the <br /> Team</h1>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size:60px;
        font-weight:900;
        color:#343434;

        @media (max-width: 900px) {
            display:none;
        }
    }
   `


const LogoWrapper = styled.div`

    img{
        height:6rem;

    }

    h3{
        text-align:center;
        color: #ff8d8d;
        font-size:30px;
    }

`
const Container = styled.div`
    background: #eefcff;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
`
const Wrapper = styled.div`
    background-image:url(${bgImg});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    width:100%;
    height:100%;
    display: flex;
`
export default RegisterScreen;
