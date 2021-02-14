import { useAuth } from '../contexts/AuthContext';

const Friends = () => {
    const { Logout } = useAuth();

    return (
        <div>
            <h1>Friends</h1>
            <button type="button" onClick={() => {
                console.log('logout');
                Logout();
            }}>Logout</button>
        </div>
    );
}

export default Friends;