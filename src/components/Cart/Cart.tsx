import React from "react";
import './Cart.css'
import {CartProps, IBook} from "../../interfaces/interfaces";

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