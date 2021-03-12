import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AuthContext = React.createContext();

// custom hook to use the context
export function useAuth() {
    return useContext(AuthContext);
}

// component to implement the context provider
export const AuthProvider = ({children}) => {
    // state
    const [currentUser, setCurrentUser] = useState(null);

    const history = useHistory();

    // updates the state from localStorage on refresh
    useEffect(() => {
        const user = localStorage.getItem('user');
        setCurrentUser(JSON.parse(user));
    }, []);

    // logic functions of the authContext
    const Signup = userData => {
        return axios.post('http://localhost:5000/signup', userData);
    }

    const Login = (email, password) => {
        return axios.post('http://localhost:5000/login', { email, password });
    }

    const Logout = async () => {
        console.log('logout context function');
        try{
            await axios.post('/logout');
            localStorage.clear();
            setCurrentUser(null);
            history.push('/');
        }
        catch(err){
            console.log(err);
        }
    }

    // context values
    const value = {
        currentUser,
        setCurrentUser,
        Signup,
        Login,
        Logout
    }; 
    
    let theme = currentUser?.settings?.darkMode ? 'darkTheme' : 'lightTheme';

    if(!currentUser){
        theme = 'darkTheme';
    }


    return (
        <AuthContext.Provider value={value}>
            <div className={theme}>
                {children}
            </div>
        </AuthContext.Provider>
    );
}