import React, { useState } from "react";
import axios from "axios";
import Book from "./Book";
import '../styles/global.css';
import {IBook} from "./Book";
import Cart from "./Cart";




const BooksSearch = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState<IBook[]>([]);
    const [favBooks, setFavs] = useState<IBook[]>([]);
    const [totalItems, setTotalItems] = useState(0);

    const addToFavorites = (book: IBook) => {
        setFavs([...favBooks, book]);
    };

    const searchBooks = async () => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCb02oH6jcaRnMaw-_YOzFY82CbO7mQWIg`
            );
            setBooks(response.data.items || []);
            setTotalItems(response.data.totalItems || null);

        } catch (error) {
            console.log('Error fetching data', error);
        }
    };

    return (
        <section className="searchBooks">
            <div className="cart">
                <Cart favBooks={favBooks} />
            </div>
            <input
                type="text"
                placeholder="Search for books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="searchBtn" onClick={searchBooks}>Search</button>

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
