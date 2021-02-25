import { useState } from 'react';

const PasswordInput = ({passRef, text, error, name, change}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="input__container">
            <input className={error ? 'error' : ''} type={visible ? "text" : "password"} ref={passRef} 
            placeholder={text} name={name} onChange={change}/>
        </div>
    );
}

export default PasswordInput