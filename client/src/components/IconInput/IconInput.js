import { useRef } from 'react';
import { Link } from 'react-router-dom';

import './IconInput.css';

const IconInput = ({Icon, text, type, click, color, checked, disabled, name}) => {

    const toggleRef = useRef();

    const handleToggle = () => {
        if(!disabled) toggleRef.current.click();
    }

    switch(type){
        case "button": 
            return (
                <button className="icon-input" type="button" onClick={click}>
                    <div className="icon-container" style={{backgroundColor: color}}>
                        <Icon className="input-icon"/>
                    </div>
                    {text}
                </button>
            );
        case "link":
            return (
                <Link className="icon-input" to={click}>
                    <div className="icon-container" style={{backgroundColor: color}}>
                        <Icon className="input-icon"/>
                    </div>
                    {text}
                </Link>
            );
        case 'toggle':
            return (
                <div className="icon-input" onClick={handleToggle}>
                    <div className="icon-container" style={{backgroundColor: color}}>
                        <Icon className="input-icon"/>
                    </div>
                    {text}
                    <label className="switch">
                        <input type="checkbox" checked={checked} ref={toggleRef} onChange={click}
                            disabled={disabled} name={name}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            );
        default:
            return <div>Invalid Type</div>
    }
}

export default IconInput;