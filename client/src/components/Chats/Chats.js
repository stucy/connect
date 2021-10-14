import { useState, useEffect } from 'react';

import './Chats.css';

import Auxiliary from '../../hoc/Auxiliary';

import { GiHamburgerMenu } from "react-icons/gi";

const Chats = () => {
    const [side, setSide] = useState(true);

    let x = window.matchMedia("(max-width: 780px)");

    const handleResize = () => {
        if(x.matches) return setSide(false);
        setSide(true);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize)
    }, []);

    return (
        <div className={`chats-container ${side ? 'active' : 'hidden'}`}>
            {side ?
                <Auxiliary>
                    <h1 className="chats-heading">Messages</h1>
                    <button className="close-drawer" onClick={() => setSide(false)} >X</button>
                </Auxiliary>
            :
                <GiHamburgerMenu className="burger-icon" onClick={() => setSide(true)} />
            }
        </div>
    )
}

export default Chats;