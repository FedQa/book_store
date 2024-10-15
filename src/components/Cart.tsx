import React from "react";
import {IBook} from "./Book";
import './../styles/Cart.css'

interface CartProps {
    booksInCart: IBook[];
}

const Cart = ({booksInCart} : CartProps) => {
    return (
        <div>
            <h2 className="cart__header">Cart</h2>
            <ul>
                {booksInCart.map((book: IBook) => (
                    <li key={book.id}>
                        {book.volumeInfo.title} {book.saleInfo.listPrice?.amount} {book.saleInfo.listPrice?.currencyCode}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;