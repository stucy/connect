import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

import IconInput from '../../components/IconInput/IconInput';

import './Profile.css';

import { HiLockClosed, HiOutlineLogout, HiMoon, HiChat, HiBell, HiArrowLeft, HiPencil } from "react-icons/hi";

const Profile = () => {
    const { Logout, currentUser, setCurrentUser} = useAuth();
    const [loading, setLoading] = useState(false);
    const [avatar, setAvatar] = useState(currentUser?.avatar);

    const history = useHistory();

    const fileInputRef = useRef()

    useEffect(() => {
        if(currentUser?.avatar == 'default.png' || true){
            import('../../images/default.png')
            .then((img) => {
                setAvatar(img.default)
            });
        }
    }, [])

    const settingChangeHandler = (e) => {
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

    const avatarUploadHandler = (e) => {
        console.log(e.target.value);

        if (e.target.files && e.target.files.length > 0) {

            const location = {
                pathname: '/crop-avatar',
                state: { 
    
                 }
            }

            const reader = new FileReader();
            reader.addEventListener('load', () => {
                location.state = { img: reader.result}
                history.push(location);
            });
            reader.readAsDataURL(e.target.files[0]);

        }

    }
    
    return (
        <div className="profile-container">
            <HiArrowLeft className="back-icon" onClick={() => history.goBack()}/>


            <div className="profile-avatar">
                <img src={avatar} alt="Profile Image"/>
                <HiPencil className="edit-icon" onClick={() => {
                    fileInputRef.current.click();
                }}/>
                <input type="file" onChange={avatarUploadHandler} name="avatarUpload" ref={fileInputRef} style={{display: 'none'}}/>
            </div>

            <h2>Stoyan G.</h2>
            <h4>Profile</h4>

            <IconInput type="toggle" Icon={HiMoon} 
                text="Dark Mode" checked={currentUser?.settings.darkMode}
                 click={settingChangeHandler} color="darkgray" disabled={true} name="darkMode"/>

            <IconInput type="toggle" Icon={HiChat} 
                text="Notifications" checked={currentUser?.settings.notifications}
                 click={settingChangeHandler} color="lightblue" disabled={loading} name="notifications"/>

            <IconInput type="toggle" Icon={HiBell} 
                text="Active Status" checked={currentUser?.settings.activeStatus}
                 click={settingChangeHandler} color="lightgreen" disabled={loading} name="activeStatus"/>

            <h4>Security</h4>

            <IconInput type="link" text="Change Password" click="change-password" Icon={HiLockClosed} color="darkblue"/>

            <IconInput type="button" click={Logout} text="Logout" Icon={HiOutlineLogout} color="salmon" />

        </div>
    )
}

export default Profile;