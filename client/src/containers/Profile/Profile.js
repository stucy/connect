import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

import IconInput from '../../components/IconInput/IconInput';

import './Profile.css';

import { HiLockClosed, HiOutlineLogout, HiMoon, HiChat, HiBell, HiArrowLeft} from "react-icons/hi";

const Profile = () => {
    const { Logout, currentUser, setCurrentUser} = useAuth();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleChange = (e) => {
        // set loading status
        setLoading(true);

        // get setting name
        const setting = e.target.name;

        // create post body
        const obj = {};
        obj[setting] = !currentUser.settings[setting];

        console.log(obj);
        //send post request
        axios.post('/update_settings', obj)
        .then(res => {
            setCurrentUser(prevState => {
                prevState.settings[setting] = obj[setting];
                localStorage.setItem('user', JSON.stringify(prevState));
                return {...prevState}
            });
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false);
        })

    }
    
    return (
        <div className="profile-container">
            <HiArrowLeft className="back-icon" onClick={() => history.goBack()}/>


            <h1>S</h1>
            <h2>Stoyan G.</h2>
            <h4>Profile</h4>

            <IconInput type="toggle" Icon={HiMoon} 
                text="Dark Mode" checked={currentUser?.settings.darkMode}
                 click={handleChange} color="darkgray" disabled={true} name="darkMode"/>

            <IconInput type="toggle" Icon={HiChat} 
                text="Notifications" checked={currentUser?.settings.notifications}
                 click={handleChange} color="lightblue" disabled={loading} name="notifications"/>

            <IconInput type="toggle" Icon={HiBell} 
                text="Active Status" checked={currentUser?.settings.activeStatus}
                 click={handleChange} color="lightgreen" disabled={loading} name="activeStatus"/>

            <h4>Security</h4>

            <IconInput type="link" text="Change Password" click="change-password" Icon={HiLockClosed} color="darkblue"/>

            <IconInput type="button" click={Logout} text="Logout" Icon={HiOutlineLogout} color="salmon" />

        </div>
    )
}

export default Profile;