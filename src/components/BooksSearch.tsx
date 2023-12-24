import React, { useState } from "react";
import axios from "axios";

export interface Book {
    id: number;
    volumeInfo: {
        title: string;
        authors: string[];
    };
}

const BookSearch = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState<Book[]>([]);

    const searchBooks = async () => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCb02oH6jcaRnMaw-_YOzFY82CbO7mQWIg`
            );
            setBooks(response.data.items || []);
        } catch (error) {
            console.log('Error fetching data', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchBooks}>Search</button>

            <ul>
                {books?.length === 0
                    ? "no books"
                    : books?.map((book: Book) => (
                        <li key={book.id}>
                            {book.volumeInfo.title} by {book.volumeInfo.authors?.join(', ')}
                        </li>
                    ))}
            </ul>
        </div>
    );

};

export default BookSearch;
