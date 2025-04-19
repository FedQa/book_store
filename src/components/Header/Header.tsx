// @ts-ignore
import cs from './Header.module.css'
import {useNavigate} from "react-router-dom";
// @ts-ignore
import bookIcon from "../../assets/book-icon.svg"

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={cs.header}>
            <a href="/" className={cs.main}>
                <img src={bookIcon} className={cs.icon}/>
                <span className={cs.title}>Google books searcher</span>
            </a>
            <nav className={cs.nav}>
                <ul className={cs.navList}>
                    <li>
                        <a
                            className={cs.navLink}
                            onClick={() => navigate('/likes')}
                        >Likes</a>
                    </li>
                    <li>
                        <a
                            className={cs.navLink}
                            onClick={() => navigate('/cart')}
                        >Cart</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;