import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <Link className="link" to="/">
                    <img src="/logo192.png"></img>
                </Link>
            </div>
            <div className='nav-tabs'>
                <div className='tab'>
                    <Link className='link' to="/"><span>Home</span></Link>
                </div>
                <div className='tab'>
                    <span>About</span>
                </div>
                <div className='tab'>
                    <span>Services</span>
                </div>
                <div className='tab'>
                    <Link className="link" to="/Contact"><span>Contact</span></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;