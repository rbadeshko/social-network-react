import logo from "../img/logo.png"
import profilePhoto from "../img/event-view/user-1.jpg"
import './Header.css';
const Header = () => {
    return (
        <div className="heder__wrap">
            <div className="heder__logo">
                <img className="logo__img" src={logo} alt="Traffic Network Logo" />
            </div>
            <nav className="heder__nav">
                <ul className="menu__list">
                    <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">Profile</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">Messages</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">News</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">Music</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">Settings</a></li>
                </ul>
            </nav>
            <a href="add_new_event.html" className="add-new_message">Add new Message</a>
            <div className="profile__block">
                <img src={profilePhoto} alt="" className="profile__img"/>
                <span className="profile__invitation">Hi, Roman!</span>
            </div>

        </div>
    )
}
export default Header