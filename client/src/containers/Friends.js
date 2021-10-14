import { useState } from 'react';
import { Link } from 'react-router-dom';

import ActiveFriends from '../components/ActiveFriends/ActiveFriends';
import Invites from '../components/Invites/Invites';
import Layout from '../hoc/Layout/Layout';

const Friends = () => {
    const [ active, setActive ] = useState(true);

    return (
        <Layout>
            <div>
                <h1>Friends</h1>
                <button onClick={() => setActive(true)}>Friends</button>
                <button onClick={() => setActive(false)}>Invites</button>
                {active ? <ActiveFriends /> : <Invites />}
            </div>
        </Layout>
    );
}

export default Friends;