// @ts-ignore
import cs from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {Button} from "../Button/Button";
// @ts-ignore
import bookIcon from "../../assets/book-icon.svg"

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={cs.header}>
            <a href="/">
                <img src={bookIcon} />
                <span>Google books searcher</span>
            </a>
            <div className={cs.menuButtons}>
                <Button
                    name="Likes"
                    onClick={() => navigate('/likes')}
                />
                <Button
                    name="Cart"
                    onClick={() => navigate('/cart')}
                />
            </div>
        </header>
    )
}

export default Header;