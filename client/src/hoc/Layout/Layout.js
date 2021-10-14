import Chats from "../../components/Chats/Chats";

import './Layout.css';

const Layout = ({children}) => {
    
    return (
        <div className="app-grid">
            <Chats/>
            {children}
        </div>
    )
}

export default Layout;