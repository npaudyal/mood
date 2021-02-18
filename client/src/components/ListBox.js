import React from 'react'
import styled from 'styled-components';
import Spotify from '../images/spotify-brands.svg'

const ListBox = (props) => {
    return (
        <div>
            {
                props.items.map((item, idx) => {
                    
                <h3>{item.track.name}</h3>
                       
                } )
            }
        </div>
    )
}

export default ListBox

const CardsWrap = styled.div`
    display: flex;
    padding:5px;
    flex-direction:row;
    flex-wrap:wrap;
    
    
  

`
const Card = styled.div`
    background: #282828;
    border-radius:10px;
    width:180px;
    overflow:hidden;
    padding:.88rem;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    margin:5px;

`

const CardImage = styled.img`
    height:160px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }


`

const CardContent = styled.div`
    padding:0.4rem 0;
h3{
    font-weight: 600;
    font-size:0.9rem;
}`