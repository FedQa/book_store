import React, { useState } from "react";
import axios from "axios";
import Book from "./Book";
import '../styles/global.css';
import {IBook} from "./Book";
import Cart from "./Cart";

const BooksSearch = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState<IBook[]>([]);
    const [cart, setCart] = useState<IBook[]>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const addToFavorites = (book: IBook) => {
        setCart([...cart, book]);
    };

    const searchBooks = async (startIndex = 0) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=40&key=AIzaSyCb02oH6jcaRnMaw-_YOzFY82CbO7mQWIg`
            );
            console.log(response);
            setBooks(response.data.items || []);
            setTotalItems(response.data.totalItems || 0);

        } catch (error) {
            console.log('Error fetching data', error);
            setBooks([]);
        }
        setIsLoading(false);
    };

    return (
        <section className="searchBooks">
            <div className="cart">
                <Cart booksInCart={cart} />
            </div>
            <input
                type="text"
                placeholder="Search for books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="searchBtn" onClick={() => searchBooks(0)} disabled={isLoading}>
                {isLoading ? "Searching data..." : "Search"}
            </button>

            <div className="books-number">
                {books.length > 0 && (
                    <p>Total number of books found by query is: {totalItems}</p>
                )}
            </div>
            <div className="book-list">
                {books?.length === 0
                    ? "no books"
                    : books.map((book: IBook) => (
                        <Book key={book.id} book={book} addToFavorites={addToFavorites}/>
                    ))}
            </div>
        </section>
    );

};

export default BooksSearch;
