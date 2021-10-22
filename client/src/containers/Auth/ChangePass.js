import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import PasswordInput from '../../components/PasswordInput';

import Layout from '../../hoc/Layout/Layout';

import './Auth.css';

import { HiArrowLeft } from "react-icons/hi";

const ChangePass = () => {
    //state
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    //refs
    const oldPass = useRef();
    const newPass = useRef();
    const confirmNewPass = useRef();

    const history = useHistory();

    // event handlers
    const handleChange = e => {
        const inputName = e.target.name;

        setError(prevState => {
            prevState[inputName] = null;
            
            return {...prevState}
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        setLoading(true);
        //get form data
        const oldPassword = oldPass.current.value;
        const newPassword = newPass.current.value;
        const confirmNewPassord = confirmNewPass.current.value;

        // passwords dont match error
        if(newPassword !== confirmNewPassord){
            setLoading(false);
            return setError({confirmNewPass: 'Passwords don\'t match!'});
        }

        // request body
        const body = {
            oldPassword,
            newPassword
        }

        // send post request
        axios.post('/change_password', body)
        .then(res => {
            // set success message
            setError({success: 'Password changed!'})

            // redirect after 2 seconds
            setTimeout(() => {
                history.goBack();
            }, 1000);
        })
        .catch(err => {
            // get error object
            const errors = err.response.data.errors;
            console.log(errors);

            // set error state
            setError(errors);
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (
        <Layout>
            <div className="form-container">

                <div className="back-icon-container">

                    <HiArrowLeft className="back-icon" onClick={() => history.goBack()}/>

                    <h3>Change Password</h3>
                </div>

                <span className="success-message">{error?.success}</span>
                <form onSubmit={handleSubmit}>

                    <PasswordInput error={error?.oldPass} passRef={oldPass} text="Old Password" name="oldPassword" change={handleChange} />
                    <span className="error-message">{error?.oldPassword}</span>

                    <PasswordInput error={false} passRef={newPass} text="New Password" name="newPass" change={handleChange} />

                    <PasswordInput error={error?.confirmNewPass} passRef={confirmNewPass} text="Confirm Password" name="confirmNewPass" change={handleChange} />
                    <span className="error-message">{error?.confirmNewPass}</span>

                    <button disabled={loading}>Change Password</button>
                </form>
            </div>
        </Layout>
    )
}

export default ChangePass;