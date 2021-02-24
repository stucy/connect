import { useState } from 'react';

import ActiveFriends from '../components/ActiveFriends/ActiveFriends';
import Invites from '../components/Invites/Invites';

const Friends = () => {
    const [ active, setActive ] = useState(true);

    return (
        <div>
            <h1>Friends</h1>
            <button onClick={() => setActive(true)}>Friends</button>
            <button onClick={() => setActive(false)}>Invites</button>
            {active ? <ActiveFriends /> : <Invites />}
        </div>
    );
}

export default Friends;