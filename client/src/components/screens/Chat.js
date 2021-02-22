import React, {Component} from 'react'
import {Form, Input, Button, Row, Col} from 'antd'
import {AiOutlineMessage} from 'react-icons/ai'
import io from 'socket.io-client';
import {connect} from 'react-redux'
import moment from 'moment'
import {getChats, afterPostMessage} from '../../actions/chatActions'
import ChatCard from './ChatCard'
import Dropzone from 'react-dropzone'
import axios from 'axios';
export  class Chat extends Component {

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
              
                <ChatCard key={item._id} {...item} />
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

    render() {
        return(
            <React.Fragment>
                <div>
                    <p style ={{fontSize:'2rem', textAlign:'center'}}>Real Time Chat</p>
                </div>
               
                <div style ={{maxWidth:'800px', margin:'0 auto'}}>
                    <div className='infinite-container' style={{height:'500px', overflowY:'scroll'}}>
                        {this.props.chats && (
                            this.renderCards()
                        )}
                      
                        <div ref = {el => {
                            this.messagesEnd = el;
                        }}
                        style={{float:'left', clear:'both'}} />
                    </div>

                    <Row>
                        <Form layout ="inline" onSubmit={this.submitMessage}>
                            <Col span={18}>
                                <Input
                                    id="message"
                                    prefix={<AiOutlineMessage />}
                                    placeholder="Lets start talking"
                                    type="text"
                                    value={this.state.chatMessage}
                                    onChange={this.handleSearchChange}
                                    />
                            </Col>
                            <Col span={2}>
                                <Dropzone onDrop={this.onDrop}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                               <button>Dropzone</button>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </Col>
                            <Col span={4}>
                                <Button type = "primary" onClick={this.submitMessage} style={{width:'100%'}} htmlType="submit">
                                    <AiOutlineMessage />
                                </Button>
                            </Col>
                        </Form>
                    </Row>
                </div>
            </React.Fragment>
        )

    }

}
const mapStateToProps = state => {
    return {
        user:state.auth.user,
        chats:state.chat
    }
}

export default connect(mapStateToProps)(Chat);