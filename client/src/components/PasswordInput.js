import { useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({passRef, text, error, name, change}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="input__container">
            <input className={error ? 'error' : ''} type={visible ? "text" : "password"} ref={passRef} 
            placeholder={text} name={name} onChange={change}/>
            {
                visible ? <FaEyeSlash  className="pass-icon" onClick={() => setVisible(false)}/> 
                : <FaEye className="pass-icon" onClick={() => setVisible(true)} />
            }
        </div>
    );
}

export default PasswordInput