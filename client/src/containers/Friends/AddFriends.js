import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout';

import './Friends.css'

import Friend from '../../components/Friend/Friend';
import SearchInput from '../../components/SearchInput/SearchInput'; 

import { HiArrowLeft } from "react-icons/hi";

import img from '../../logo192.png';

const Friends = () => {

    const history = useHistory();

    const [ users, setUsers] = useState([
        {id: 1, name: 'Boyan'},
    ]);

    const userElements = users.map(el => {
        return <Friend img={img} name={el.name} key={el.id} id={el.id} type='user' />
    })

    return (
        <Layout>
            <div className="friends-container">
                <div className="back-icon-container">
                    <HiArrowLeft className="back-icon" onClick={() => history.goBack()}/>
                    <h3>Add Friends</h3>
                </div>
                <div className="friend-items">
                    <SearchInput placeholder='Find users' handle={() => {}}/>
                    {userElements}
                </div>
            </div>
        </Layout>
    );
}

export default Friends;