import React from "react";
import "../styles/Book.css";
import "../styles/BooksDescription.css";


const BookDescription = ({description} : {description: string}) => {
    return <span>{description?.length > 0 ? description : "no description about this book"}</span>;
}


export default BookDescription;