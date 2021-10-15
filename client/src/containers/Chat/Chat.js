import { useHistory, Link } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout';

import './Chat.css';

import { HiArrowLeft } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

const Chat = () => {

    const history = useHistory();

    return (
        <Layout>
            <div className="chat-container">
                <div className='chat-header'>
                    <HiArrowLeft className="back-icon" onClick={() => history.goBack()}/>
                    <h3>Stoyan</h3>
                    <Link to="/chat/1/settings"><BsThreeDots className='chat-settings' /></Link>
                </div>
            </div>
        </Layout>
    )
}

export default Chat;