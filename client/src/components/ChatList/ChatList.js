import { useState } from 'react';

import ChatItem from './ChatItem/ChatItem';

import img from '../../logo192.png'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '7rem'
}

const ChatList = () => {

    const [chats, setChats] = useState([
        {id: 1,name: 'Stoyan', lastMessage: 'Hello! How are you. Lorem ipsu dolor amet something something', time: '12:23'},
        {id: 2,name: 'Ivan', lastMessage: 'Yo. How are you man?', time: '22:13'},
    ]);

    const chatElements = chats.map(el => {
        return <ChatItem img={img} name={el.name} message={el.lastMessage} key={el.id} time={el.time} id={el.id}/>
    })

    return (
        <div style={containerStyle} >{chatElements}</div>
    );
}

export default ChatList;