import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';

import Layout from '../../hoc/Layout/Layout';
import ChatMessage from '../../components/ChatMessage/ChatMessage';

import './Chat.css';

import { HiArrowLeft } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

import img from '../../logo192.png';

const Chat = () => {

    const history = useHistory();

    const [ messages, setMessages] = useState([
        {id: 1, msg: 'zdr kp', time: '12:33', type: 'sent'},
        {id: 2, msg: 'nishto ami ti?', time: '12:44', type: 'received'},
        {id: 3, msg: 'boyan smeni imeto si na vuprosche', time: '13:44', type: 'system'},
    ]);

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
                <div className="messages-container">
                    {messageElements}
                </div>
            </div>
        </Layout>
    )
}

export default Chat;