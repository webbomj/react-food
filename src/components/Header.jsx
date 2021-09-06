import { Link } from 'react-router-dom';
 
function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <Link to="/" className='brand-logo'>
                    React Shop
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <a href="https://webbomj.github.io/projects">All project</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export {Header};