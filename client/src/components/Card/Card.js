import React from 'react'
import styled from 'styled-components'
const Card = (props) => {
    return (
        <a href={props.link} target = "_blank"style={{color: "#FFFFFF",
            textDecoration: "none"}}>
            <CardsWrap>
                <CardBody>
                    <CardImage movie={props.movie} src={props.image} />
                    <CardContent> {props.name}</CardContent>
                </CardBody>
            </CardsWrap>
        </a>
    )
}

export default Card

const CardsWrap = styled.div`
    display: flex;
    padding:5px;
    flex-direction:row;
    flex-wrap:wrap;
`
const CardBody = styled.div`
    background: #282828;
    border-radius:10px;
    width:180px;
    overflow:hidden;
   
    padding:.88rem;
   height:230px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    margin:5px;
    transition: all 0.1s ease-in;
    &:hover{
        transform:scale(1.1);
        cursor: pointer;
    }

`

const CardImage = styled.img`
    height:160px;
   width:150px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        
    }
`

const CardContent = styled.div`
    padding:0.3rem 0.3rem;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
h3{
    font-weight: 600;
    font-size:0.9rem;
   
}`