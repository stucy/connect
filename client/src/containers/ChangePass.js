import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
        const confirmNewPass = confirmNewPass.current.value;

        // passwords dont match error
        if(newPass === confirmNewPass){
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
            }, 2000);
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
        <form onSubmit={handleSubmit}>
            <input className={`${error?.oldPass ? 'error' : ''}`} type="password" ref={oldPass} placeholder="Old Password"/>
            <span className="error-message">{error?.oldPassword}</span>

            <input type="password" ref={newPass} placeholder="New Password"/>

            <input className={`${error?.confirmNewPass ? 'error' : ''}`} type="password" ref={confirmNewPass} placeholder="Confirm new password" name="confirmNewPass"/>
            <span className="error-message">{error?.confirmNewPass}</span>

            <button disabled={loading}>Change Password</button>
        </form>
    )
}

export default ChangePass;