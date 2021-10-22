import { useHistory, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import Layout from '../../hoc/Layout/Layout';
import ChatMessage from '../../components/ChatMessage/ChatMessage';

import './Chat.css';

import { HiArrowLeft } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

import img from '../../logo192.png';

const Chat = () => {

    const history = useHistory();

    const messageRef = useRef();
    const chatRef = useRef();

    const [ messages, setMessages] = useState([
        {id: 1, msg: 'Hello! How are you?', time: '12:33', type: 'sent'},
        {id: 2, msg: 'Hi!! I am fine how about you?', time: '12:44', type: 'received'},
        {id: 3, msg: 'Stoyan set Boyans nickname to Bo', time: '13:44', type: 'system'},
    ]);

    useEffect(() => {
        //scroll to bottom after message send
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages])

    const handleSendMessage = (e) =>{
        e.preventDefault();
        const msg = messageRef.current.value;
        messageRef.current.value = '';

        //temp time
        const id = Math.random();
        const today = new Date();
        const time = `${today.getHours()}:${today.getMinutes()}`;
        
        const type = 'sent';

        const msgObj = {
            id,
            msg,
            time,
            type
        }

        setMessages(prev => {
            return [...prev, msgObj];
        });

    }

    const messageElements = messages.map(el => {
        return <ChatMessage img={img} {...el} key={el.id}/>
    })

    return (
        <Layout>
            <div className="chat-container">
                <div className='chat-header'>
                    <HiArrowLeft className="back-icon" onClick={() => history.goBack()}/>
                    <h3>Stoyan</h3>
                    <Link to="/chat/1/settings"><BsThreeDots className='chat-settings' /></Link>
                </div>
                <div className="messages-container" ref={chatRef}>
                    {messageElements}
                </div>
                <form className='message-input-container' onSubmit={handleSendMessage}>
                    <input className='message-input' ref={messageRef} type='text' placeholder='Type message..' />
                    <IoSend onClick={handleSendMessage} className="send-message-btn"/>
                </form>
            </div>
        </Layout>
    )
}

export default Chat;