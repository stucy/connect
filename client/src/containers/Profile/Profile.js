import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

import IconInput from '../../components/IconInput/IconInput';

import Layout from '../../hoc/Layout/Layout';

import './Profile.css';

import avatar from '../../logo192.png';

import { HiLockClosed, HiOutlineLogout, HiMoon, HiChat, HiBell, HiArrowLeft, HiPencil } from "react-icons/hi";

const Profile = () => {
    const { Logout, currentUser, setCurrentUser} = useAuth();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const fileInputRef = useRef()

    const settingChangeHandler = (e) => {
        // set loading status
        setLoading(true);

        // get setting name
        const setting = e.target.name;

        // create post body
        const obj = {};
        
        obj[setting] = !currentUser.settings[setting];

        // console.log(obj);
        //send post request
        axios.post('http://localhost:5000/update_settings', obj)
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
        // console.log(e.target.value);

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
        <Layout>
            <div className="profile-container">
                <div className="back-icon-container">
                    <HiArrowLeft className="back-icon" onClick={() => history.goBack()}/>
                    <h3>Settings</h3>
                </div>


                <div className="profile-avatar">
                    {/* <img src={`http://localhost:5000/avatars/${currentUser?.avatar}`} alt="Profile Image"/> */}
                    <img src={avatar} alt="Profile Image"/>
                    <HiPencil className="edit-icon" onClick={() => {
                        fileInputRef.current.click();
                    }}/>
                    <input type="file" onChange={avatarUploadHandler} name="avatarUpload" ref={fileInputRef} style={{display: 'none'}}/>
                </div>

                <h2>Stoyan G.</h2>
                <h4>Profile</h4>

                <IconInput type="toggle" Icon={HiMoon} 
                    text="Dark Mode" checked={!!(currentUser?.settings.darkMode)}
                    click={settingChangeHandler} color="#545454" name="darkMode"/>

                <IconInput type="toggle" Icon={HiChat} 
                    text="Notifications" checked={!!(currentUser?.settings.notifications)}
                    click={settingChangeHandler} color="#57A6C4" disabled={loading} name="notifications"/>

                <IconInput type="toggle" Icon={HiBell} 
                    text="Active Status" checked={!!(currentUser?.settings.activeStatus)}
                    click={settingChangeHandler} color="#6FDC9A" disabled={loading} name="activeStatus"/>

                <h4>Security</h4>

                <IconInput type="link" text="Change Password" click="change-password" Icon={HiLockClosed} color="#2F458E"/>

                <IconInput type="button" click={Logout} text="Logout" Icon={HiOutlineLogout} color="#C55F62" />

            </div>
        </Layout>
    )
}

export default Profile;