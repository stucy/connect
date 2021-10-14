import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Chats.css';

import Auxiliary from '../../hoc/Auxiliary';

import { GiHamburgerMenu } from "react-icons/gi";
import { FaCog } from "react-icons/fa";

import chatImg from '../../logo192.png';

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
                    {x.matches ? <button className="close-drawer" onClick={() => setSide(false)} >X</button> : null}

                    <div className="clearfix"></div>
                    <footer>
                        <div>
                            <img src={chatImg} alt="Chat Image" />
                            <h1>Stucy</h1>
                        </div>
                        <Link to="/profile">
                            <FaCog className="cog-icon"/>
                        </Link>
                        
                    </footer>
                </Auxiliary>
            :
                <GiHamburgerMenu className="burger-icon" onClick={() => setSide(true)} />
            }
        </div>
    )
}

export default Chats;