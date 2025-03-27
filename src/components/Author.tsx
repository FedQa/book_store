import React from "react";

type AuthorProps = {
    authors: string[];
}

const Author = ({authors} : AuthorProps) => {
    return <span>{authors?.length > 0 ? `Author: ${authors.join(', ')}` : ''}</span>;
}

export default Author;