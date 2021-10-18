import { Link } from 'react-router-dom';

import './404.css';

import er404 from '../404.svg';

const ER404 = () => {
    return (
        <div className="er404-container">
            <h1 className='er404'>404</h1>
            <h2 className='er404-message'>Oops, Page Not Found!</h2>
            <img className='er404-img' src={er404} alt="404 Image" />
            <Link to='/' className="er404-btn">Go to homepage</Link>
        </div>
    )
}

export default ER404;