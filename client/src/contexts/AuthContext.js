import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    // state
    const [currentUser, setCurrentUser] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if(user != null)
            setCurrentUser(JSON.parse(user));
    }, []);

    const Signup = userData => {
        return axios.post('/signup', userData);
    }

    const Login = (email, password) => {
        return axios.post('/login', { email, password });
    }

    const Logout = async () => {
        try{
            await axios.post('/logout');
            localStorage.clear();
            history.push('/');
        }
        catch(err){
            console.log(err);
        }
    }

    const value = {
        currentUser,
        setCurrentUser,
        Signup,
        Login,
        Logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}