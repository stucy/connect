import { Link } from 'react-router-dom';

import './Friend.css';

import { BsChatFill, BsThreeDots } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { ImCancelCircle, ImCheckmark} from "react-icons/im";

const Friend = ({name, img, id, type}) => {
    let element;

    switch (type) {
        case 'friend':
            element =   <div className="friend-container">
                            <div className="friend-content">
                                <img className='friend-avatar' src={img} alt="avatar" />
                                <h1 className="friend-name">{name}</h1>
                            </div>
                            <div className="friend-buttons">
                                <Link to={`/chat/${id}`}>
                                    <BsChatFill className='friend-icons' />
                                </Link>
                                <Link to={`/chat/${id}`}>
                                    <BsThreeDots className='friend-icons' />
                                </Link>
                            </div>
                        </div>
            break;
        case 'invite':
            element =   <div className="friend-container">
                            <div className="friend-content">
                                <img className='friend-avatar' src={img} alt="avatar" />
                                <h1 className="friend-name">{name}</h1>
                            </div>
                            <div className="friend-buttons">
                                <ImCancelCircle className='friend-icons cancel' />
                                <ImCheckmark className='friend-icons accept' />
                            </div>
                        </div>
            break
        case 'user':
            element =   <div className="friend-container">
                            <div className="friend-content">
                                <img className='friend-avatar' src={img} alt="avatar" />
                                <h1 className="friend-name">{name}</h1>
                            </div>
                            <div className="friend-buttons">
                                <FaUserPlus onClick={() => {}} className='friend-icons' />
                            </div>
                        </div>
            break;
    }

    return element;
}

export default Friend;