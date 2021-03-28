import React from 'react'
import { Avatar } from '@material-ui/core'
import moment from 'moment'

import './Message.css'

const Message = (props) => {
    
    return (

       
        <div className="message">
            <Avatar />
            <div className="message__info">
               
                   {props.sender ?<h4>{props.sender.name}<span className="message__timestamp">{moment().fromNow()}</span></h4> : null} 
                    {
                    props.message.substring(0,7) === "uploads" ? 
                    props.message.substring(props.message.length -3,props.message.length) === 'mp4' ?
                    <video
                    style={{maxWidth:'200px'}}
                     src= {`http://localhost:9999/${props.message}`} alt="video"
                    type="video/mp4" controls
                    />
                    :
                    <img style={{maxWidth:'200px'}}
                    src= {`http://localhost:9999/${props.message}`} alt="image" />
                    :
                <p>{props.message}</p>
            }
            </div>
        </div>
    )
}

export default Message
