import React from 'react'
import moment from 'moment'
import {Comment, Tooltip} from 'antd';
const ChatCard = (props) => {
    return (
        <div style={{ width:'100%'}}>
            <Comment 
            style={{color:'black'}}
                author={props.sender.name}
                // avatar = {}
                content={
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
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
                />
            
        </div>
    )
}

export default ChatCard
