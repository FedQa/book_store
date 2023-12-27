import React from "react";

const Author = ({authors} : {authors: string[]}) => {
    return <span>{authors?.length > 0 ? `Author: ${authors.join(', ')}` : ''}</span>;
}

export default Author;