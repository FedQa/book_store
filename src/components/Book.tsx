import React from "react";
import Author from "./Author";
import "../styles/Book.css";
import "../styles/BooksSearch.css";
import BookPrice from "./BookPrice";


export interface IBook {
    id: number;
    totalItems: number;
    volumeInfo: {
        title: string;
        authors: string[];
        publishedDate: number;
        description: string;
        pageCount: number;
        categories: [];
    };
    saleInfo: {
        listPrice: {
            amount?: number,
            currencyCode?: "RUB"
        },
    }
}


const Book = ({ book }: { book: IBook }) => {
    return (
        <div className="column">
            <div className="book-card">
                <p>Title: {book.volumeInfo.title}</p>
                <Author authors={book.volumeInfo.authors} />
                <p>Publication date: {book.volumeInfo.publishedDate}</p>
                <p>Page count: {book.volumeInfo.pageCount}</p>
                <p>Categories: {book.volumeInfo.categories}</p>
                {book.saleInfo.listPrice && book.saleInfo.listPrice.amount && book.saleInfo.listPrice.currencyCode ? (
                    <BookPrice
                        price={book.saleInfo.listPrice.amount}
                        currencyCode={book.saleInfo.listPrice.currencyCode}
                    />
                    ) : (
                        <p>No price</p>
                )}
            </div>
        </div>
    );
};



export default Book;