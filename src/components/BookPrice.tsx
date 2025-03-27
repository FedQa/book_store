import React from "react";
import "./BookCard/Book.css";
import "../styles/BookPrice.css";
import {BookPriceProps} from "../interfaces/interfaces";

const BookPrice = ({price, currencyCode}: BookPriceProps) => {
    return <span>{`Price: ${price} ${currencyCode}`}</span>;
}

export default BookPrice;