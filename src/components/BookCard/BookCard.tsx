import React from "react";
import Author from "../Author";
import "./Book.css";
import "../../styles/BooksSearch.css";
import BookPrice from "../BookPrice";
import {IBook} from "../../interfaces/interfaces";


const BookCard = ({ book, addToFavorites }: { book: IBook; addToFavorites: (book: IBook) => void}) => {
    return (
        <div className="book-card">
            <p className="book-title">Title: {book.volumeInfo.title}</p>
            <Author authors={book.volumeInfo.authors} />
            <p className="book-info">Publication date: {book.volumeInfo.publishedDate}</p>
            <p className="book-info">Page count: {book.volumeInfo.pageCount}</p>
            <p className="book-info">Categories: {book.volumeInfo.categories?.join(', ') || 'Unknown'}</p>
            {book.saleInfo.listPrice && book.saleInfo.listPrice.amount && book.saleInfo.listPrice.currencyCode ? (
                <BookPrice
                    price={book.saleInfo.listPrice.amount}
                    currencyCode={book.saleInfo.listPrice.currencyCode}
                />
            ) : (
                <p className="book-info">No price</p>
            )}
            <div className="addToCart">
                <button className="addBtn" onClick={() => addToFavorites(book)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};



export default BookCard;