import { useState, useRef } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

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
            localStorage.setItem('user', JSON.stringify(res));
            setCurrentUser(res);

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
        <form onSubmit={handleSubmit} onChange={handleChange} autoComplete="off">
                <span>{error}</span>
                <input type="text" ref={emailRef} placeholder="Email" />
                <input type="password" ref={passRef} placeholder="Password" />
            <button type="submit" disabled={loading}>Login</button>
            <Link to="/register">
                Don't have an accout? Register!
            </Link>
        </form>
    );
}

export default Auth;