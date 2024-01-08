import React from "react";
import {IBook} from "./Book";

interface CartProps {
    favBooks: IBook[];
}

const Cart = ({favBooks} : CartProps) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {favBooks.map((book: IBook, index: number) => (
                    <li key={index}>{book.volumeInfo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;