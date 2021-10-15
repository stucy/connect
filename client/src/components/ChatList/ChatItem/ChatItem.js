import { Link } from 'react-router-dom';

import './ChatItem.css';

const ChatItem = ({name, message, time, img, id}) =>{
    return (
        <Link className="item-container" to={`/chat/${id}`} >
            <img className="item-avatar" src={img} alt="Profile Image" />
            <div className='item-content' >
                <h2 className='item-name'>{name}</h2>
                <p className="item-message">{message}</p>
            </div>
            <span className='item-time'>{time}</span>
        </Link>
    );
}

export default ChatItem;