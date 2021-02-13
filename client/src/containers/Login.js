import { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';

const Auth = () => {
    // states
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // hooks
    const { Login } = useAuth();
    const history = useHistory();

    // refs
    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = async e => {
        e.preventDefault();
        
        setLoading(true);

        // get form data
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        try{
            const res = await Login(email, pass);
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
                <input type="password" ref={passRef} placeholder="Password" />
            <button type="submit" disabled={loading}>Login</button>
            <Link to="/register">
                Don't have an accout? Register!
            </Link>
        </form>
    );
}

export default Auth;