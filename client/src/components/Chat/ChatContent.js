import React ,{Component} from 'react'
import Message from './Message'
import './ChatContent.css'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import {connect} from 'react-redux'
import io from 'socket.io-client';
import moment from 'moment'
import Dropzone from 'react-dropzone'
import axios from 'axios';
import {getChats, afterPostMessage} from '../../actions/chatActions'
import Nav from '../Nav/Nav'



export class ChatContent extends Component  {

    state = {
        chatMessage:"",
    }

    componentDidMount() {
        let server = "http://localhost:9999/";

        this.props.dispatch(getChats())
        this.socket = io(server);

        this.socket.on("Output Chat Message", messageFromBackEnd => {
            this.props.dispatch(afterPostMessage(messageFromBackEnd))
        })
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({behavior:'smooth'});
    }

    handleSearchChange = (e) => {
        this.setState({chatMessage:e.target.value})
    }

    renderCards = () => {
        return(
            
        this.props.chats.chats && this.props.chats.chats.map((item) => 
          
            <Message key={item._id} {...item} />
    )
                
        )
    }

    submitMessage =(e) => {
        e.preventDefault();

        let chatMessage= this.state.chatMessage;
        let userId = this.props.user._id;
        let userName = this.props.user.name;
        // let userImage = this.props.user.image;
        let nowTime = moment();
        let type = "Text";

        this.socket.emit("Input Chat Message" , {
            chatMessage,
            userId,
            userName,
            nowTime,
            type,
            // userImage,
        })
        this.setState({chatMessage:""})
    }
    onDrop =(files) =>{
        let formData = new FormData;
        const config = {
            header:{'content-type': 'multipart/form-data'}
        }
        formData.append('file', files[0])
        
        axios.post('api/chat/uploadFiles', formData, config)
            .then(response => {
                if(response.data.success){
                    let chatMessage= response.data.url;
                    let userId = this.props.user._id;
                    let userName = this.props.user.name;
                    // let userImage = this.props.user.image;
                    let nowTime = moment();
                    let type = "VideoOrImage";

                    this.socket.emit("Input Chat Message" , {
                        chatMessage,
                        userId,
                        userName,
                        nowTime,
                        type,
                        // userImage,
                    })
                }
            })
    }
    render (){
    return (
        <React.Fragment>
        <Nav />
        <div className="chat">
           <div className = "chat__messages">
           {this.props.chats && (
                            this.renderCards()
                        )}
                     <div ref = {el => {
                            this.messagesEnd = el;
                        }}
                        style={{float:'left', clear:'both'}} />
                    </div>
           <div className = "chat__input">
               <AddCircle />
               <form  onSubmit={this.submitMessage} >
                   <input
                     
                      value={this.state.chatMessage}
                     onChange={this.handleSearchChange}
                   type="text"
                    placeholder ="type something"

                   />
                   <button className="chat__inputButton" onClick ={this.submitMessage} htmltype="submit">
                        send
                   </button>
               </form>
               <div className = "chat__inputIcons">
               <Dropzone onDrop={this.onDrop}>
                                     {({getRootProps, getInputProps}) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <CardGiftcard fontSize ="small" />
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                   
                   <Gif fontSize ="large" />
                   <EmojiEmotions fontSize ="large" />
               </div>
           </div>
        </div>
        </ React.Fragment>

    )
}
}
const mapStateToProps = state => {
    return {
        user:state.auth.user,
        chats:state.chat
    }
}

export default connect(mapStateToProps)(ChatContent);
