import './navbar.scss';

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <img src="/logo192.png"></img>
            </div>
            <div className='nav-tabs'>
                <div className='tab'>
                    <span>Home</span>
                </div>
                <div className='tab'>
                    <span>About</span>
                </div>
                <div className='tab'>
                    <span>Services</span>
                </div>
                <div className='tab'>
                    <span>Contact</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;