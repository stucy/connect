import { useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout';

import './Friends.css'

import Friend from '../../components/Friend/Friend'

import { FaUserPlus } from "react-icons/fa";

import img from '../../logo192.png';

const Friends = () => {
    const [ invites, setInvites ] = useState([
        {id: 1, name: 'Stoyan'},
    ]);

    const [ friends, setFriends ] = useState([
        {id: 1, name: 'Ivan'},
    ]);

    const [ users, setUsers] = useState([
        {id: 1, name: 'Boyan'},
    ]);

    const inviteElements = invites.map(el => {
        return <Friend img={img} name={el.name} key={el.id} id={el.id} type='invite'/>
    })

    const friendElements = friends.map(el => {
        return <Friend img={img} name={el.name} key={el.id} id={el.id} type='friend' />
    })

    const userElements = users.map(el => {
        return <Friend img={img} name={el.name} key={el.id} id={el.id} type='user' />
    })

    return (
        <Layout>
            <div className="friends-container">
                <div className="friends-header-container">
                    <h3 className="firends-heading">Friends</h3>
                    <button type="button" className="add-friend-btn">
                        Add Friend
                        <FaUserPlus className='add-friend-icon' />
                    </button>
                </div>
                <div className="friend-items">
                    {inviteElements}
                    {friendElements}
                    {userElements}
                </div>
            </div>
        </Layout>
    );
}

export default Friends;