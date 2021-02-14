import styled , {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}

`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width:1300px;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;

    @media screen and (max-width:991px) {
        padding-right:30px;
        padding-left:30px
    }

`;

export const Button = styled.button`
    border-radius:34px;
    background:${({primary}) => (primary ? "white" : '#0467fb')};
    white-space:nowrap;
    padding: ${({big}) => (big ? '12px 64px': '10px 20px')};
    color: black;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor:pointer;
    font-weight:500;

    &:hover {
        transition: all 0.3s ease-out;
        background:#fff;
        background:${({primary}) => (primary ? "black" : '#4B59f7')};
        color:white;
        
      
    }

    @media screen and (max-width: 960px) {
            width: 100%;
        }

`


export const ContinueButton = styled.button`

 border-radius:34px;
 margin-top:50px;
    background: transparent;
    white-space:nowrap;
    padding: 12px 64px;
    color: white;
    font-size: 20px;
    outline:none;
    border:none;
    cursor:pointer;
    font-weight:500;
    border:2px solid #fff;


    &:hover {
        transition: all 0.3s ease-out;
       background:white;

        color:black;
        
      
    }

    @media screen and (max-width: 960px) {
            width: 100%;
        }


`