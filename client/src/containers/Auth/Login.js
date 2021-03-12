import { useState, useRef } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import PasswordInput from '../../components/PasswordInput';

import './Auth.css';

const Auth = () => {
    // states
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // hooks
    const { Login, setCurrentUser, currentUser} = useAuth();
    const history = useHistory();

    // refs
    const emailRef = useRef();
    const passRef = useRef();
    

    // event handlers
    const handleChange = e => {
        if (!error) return;
        setError('');
    }

    // event handlers
    const handleSubmit = async e => {
        e.preventDefault();
        
        setLoading(true);

        // get form data
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        try{
            const res = await Login(email, pass);
            

            // if successful login set the local storage and state
            localStorage.setItem('user', JSON.stringify(res.data));
            setCurrentUser(res.data);

            // redirect on successfull login
            history.push('/friends');
        }
        catch(err){
            // get error object
            const errors = err.response.data.errors;
            console.log(errors);

            // set error state
            setError(errors);
        }
        finally{
            // stop the loading state
            setLoading(false);
        }
    }

    // if user is logged in redirect to main app
    if(currentUser) return <Redirect to="/friends" />

    return (
       <div className="form-container">
           <h1>Let's sign you in.</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           <form onSubmit={handleSubmit} onChange={handleChange} autoComplete="off">
                <span className="error-message">{error}</span>
                <input type="text" ref={emailRef} placeholder="Email" />
                <PasswordInput passRef={passRef} text="Password"/>
            <div className="inverted__link">
                <span>
                    Don't have an account? <Link to="/register">Register!</Link>
                </span>
                <button type="submit" disabled={loading}>Sign In</button>
            </div>
        </form>
       </div>
    );
}

export default Auth;