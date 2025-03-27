import {Title} from "../../components/Title/Title";
// @ts-ignore
import cs from './HomePage.module.css'
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import axios from "axios";
import {getBooks} from "../../API/api";
import {useState} from "react";
import {SearchIcon} from "../../components/SearchIcon/SearchIcon";


export const HomePage = () => {
    const [inputValue, setInputValue] = useState("");

    const searchHandle = async () => {
        // search

        const response = await axios.get(getBooks(
            {
                query: inputValue,
            }
        ));

        const books = await response.data;
        console.log(books);
    }
    return (
        <div className={cs.wrapper}>
            <Title title="Book search"></Title>
            <div className={cs.searchElements}>
                <div className={cs.searchInput}>
                    <SearchIcon />
                    <Input
                        value={inputValue}
                        type="text"
                        placeholder="book..."
                    />
                </div>
                <Button
                    //onClick={searchHandle}
                    name="search"
                />
            </div>
        </div>
    )
}

export default HomePage;