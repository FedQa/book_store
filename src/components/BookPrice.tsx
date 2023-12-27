import React from "react";
import "../styles/Book.css";
import "../styles/BookPrice.css";





interface BookPriceProps {
    price?: number;
    currencyCode?: string;
}

const BookPrice = ({price, currencyCode}: BookPriceProps) => {
    return <span>{`Price: ${price} ${currencyCode}`}</span>;
}


export default BookPrice;