import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Profile = () => {
    const { Logout, currentUser, setCurrentUser} = useAuth();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        // set loading status
        setLoading(true);

        // get setting name
        const setting = e.target.name;

        // create post body
        const obj = {};
        obj[setting] = !true;

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
        <div>
            <h4>Profile</h4>
            <Link to="change-password">Change Password</Link>

            <label htmlFor="darkMode" > Dark Mode </label>
            <input type="checkbox" name="darkMode" disabled={loading}
                checked={currentUser?.settings.darkMode} onChange={handleChange}/>

            <label htmlFor="notifications" >Notifications</label>
            <input type="checkbox" name="notifications" disabled={loading}
                checked={currentUser?.settings.notifications} onChange={handleChange}/>


            <label htmlFor="activeStatus" >Active Status</label>
            <input type="checkbox" name="activeStatus" disabled={loading}
                checked={currentUser?.settings.activeStatus} onChange={handleChange}/>

            <button type="button" onClick={() =>Logout()}>Logout</button>
        </div>
    )
}

export default Profile;