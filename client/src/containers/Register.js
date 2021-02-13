import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';

const Auth = () => {
    // states
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    // hooks
    const { Signup, setCurrentUser } = useAuth();
    const history = useHistory();

    // refs
    const emailRef = useRef();
    const passRef = useRef();
    const passConfirmRef = useRef();
    const userNameRef = useRef();

    useEffect(() => {
        if(localStorage.getItem('user'))
            history.push('/friends');
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        
        setLoading(true);

        // get form data
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const passConfirm = passConfirmRef.current.value;
        const username = userNameRef.current.value;
      
        if(password !== passConfirm){
            setLoading(false);
            return setError({passwordConfirm: "Passwords don't match! "});
        }
        
        const userData = {
            username,
            email,
            password
        };

        try{
            const res = await Signup(userData);
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res));
            setCurrentUser(res);
            history.push('/friends');
        }
        catch(err){
            const errors = err.response.data.errors;
            setError(errors);
        }
        finally{
            setLoading(false);
        }

    }

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input type="text" ref={emailRef} placeholder="Email" />
                <input type="text" ref={userNameRef} placeholder="Username" />
                <input type="password" ref={passRef} placeholder="Password" />
                <input type="password" ref={passConfirmRef} placeholder="Confirm Password" />
            <button type="submit" disabled={loading} >Signup</button>
            <Link to="/login">
                Already have an account? Login
            </Link>
        </form>
    );
}

export default Auth;