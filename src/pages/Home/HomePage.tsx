import {Title} from "../../components/Title/Title";
// @ts-ignore
import cs from './HomePage.module.css'
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import axios from "axios";
import {getBooks} from "../../API/api";
import {useState} from "react";
import {SearchIcon} from "../../components/SearchIcon/SearchIcon";
import {useNavigate} from "react-router-dom";


export const HomePage = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const searchHandle = async () => {
        try {
            const response = await axios.get(getBooks(
                {
                    query: inputValue,
                    maxResults: 25,
                }
            ));
            const books = await response.data;
            navigate("/books" , {state: books});

        }
        catch(error) {
            console.error("Ошибка при загрузке книг:", error);
        }
    }
    return (
        <div className={cs.wrapper}>
            <Title title="Book search"></Title>
            <div className={cs.searchElements}>
                <div className={cs.searchInput}>
                    <SearchIcon
                        className={cs.icon}
                        pathColor="black"
                        iconSettings={{height: 16, width: 16}}
                    />
                    <Input
                        className={cs.input}
                        value={inputValue}
                        onChange={(e: any) => setInputValue(e.target.value)}
                        type="text"
                        placeholder="book..."
                    />
                </div>
                <Button
                    onClick={searchHandle}
                    name="search"
                />
            </div>
        </div>
    )
}

export default HomePage;