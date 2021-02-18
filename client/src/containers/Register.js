import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link, Redirect } from 'react-router-dom';

const Auth = () => {
    // states
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    // hooks
    const { Signup, setCurrentUser, currentUser } = useAuth();
    const history = useHistory();

    // refs
    const emailRef = useRef();
    const passRef = useRef();
    const passConfirmRef = useRef();
    const userNameRef = useRef();

    // event handlers
    const handleChange = e => {
        const inputName = e.target.name;

        setError(prevState => {
            prevState[inputName] = null;
            
            return {...prevState}
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        setLoading(true);

        // get form data
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const passConfirm = passConfirmRef.current.value;
        const username = userNameRef.current.value;
      
        // check if passwords match
        if(password !== passConfirm){
            // stop the loading state
            setLoading(false);

            // return to stop the function and set error state
            return setError({passwordConfirm: "Passwords don't match! "});
        }
        
        // setup a data object for the signup funcion
        const userData = {
            username,
            email,
            password
        };

        try{
            const res = await Signup(userData);

            // if successful register login the user and set the local storage and state
            localStorage.setItem('user', JSON.stringify(res));
            setCurrentUser(res);

            // redirect on successfull register
            history.push('/friends');
        }
        catch(err){
            // get error object data
            const errors = err.response.data.errors;

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
        <form onSubmit={handleSubmit} autoComplete="off">
            <input className={`${error?.email ? 'error' : ''}`} type="text" ref={emailRef} placeholder="Email" name="email" onChange={handleChange} />
            <span className="error-message">{error?.email}</span>

            <input className={`${error?.username ? 'error' : ''}`} type="text" ref={userNameRef} placeholder="Username" name="username" onChange={handleChange} />
            <span className="error-message">{error?.username}</span>

            <input className={`${error?.password ? 'error' : ''}`} type="password" ref={passRef} placeholder="Password" name="password" onChange={handleChange} />
            <span className="error-message">{error?.password}</span>

            <input className={`${error?.passwordConfirm ? 'error' : ''}`} type="password" ref={passConfirmRef} placeholder="Confirm Password" name="passwordConfirm" onChange={handleChange} />
            <span className="error-message">{error?.passwordConfirm}</span>

            <button type="submit" disabled={loading} >Signup</button>
            <Link to="/login">
                Already have an account? Login
            </Link>
        </form>
    );
}

export default Auth;