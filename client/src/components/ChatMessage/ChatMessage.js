import './ChatMessage.css';

const ChatMessage = ({msg, img, time, type}) => {
    let message;

    switch (type) {
        case 'sent':
            message =   <div className={`message-container ${type}`}>
                            <p className="message-text">{msg}</p>
                            <span className="message-time">{time}</span>
                        </div>
            break;
        case 'received':
            message =   <div className='sent-container'>
                            <img className="message-avatar" src={img} alt="User Avatar" />
                            <div className={`message-container ${type}`}>
                                <p className="message-text">{msg}</p>
                                <span className="message-time">{time}</span>
                            </div>
                        </div>
            break;
        case 'system':
            message =   <div className={`message-container ${type}`}>
                            <span className="message-time">{time}</span>
                            <p className="message-text">{msg}</p>
                        </div>
            break;
    }
    
    return message
}

export default ChatMessage;