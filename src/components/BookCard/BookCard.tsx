import {IBook} from "../../interfaces/interfaces";
// @ts-ignore
import cs from './BookCard.module.css'
import {Button} from "../Button/Button";

type BookCardProps = {
    book: IBook;
    className?: string;
}

//title: string
// authors: string[]
// publisher: string
// publishedDate: string
// description: string
// pageCount: number
// categories: string[]
// language: string

export const BookCard = (props: BookCardProps) => {
    const {book} = props;
    console.log("book: ", book);

    const handleAddToCart = () => {

    }
    return (
        <div className={cs.bookCard}>
            <h3 className={cs.title}>{book.volumeInfo.title}</h3>
            <span className={cs.authors}>{book.volumeInfo.authors}</span>
            <span className={cs.description}>{book.volumeInfo.description}</span>


            <span className={cs.amount}>{book.saleInfo?.listPrice?.amount}</span>
            <span className={cs.currencyCode}>{book.saleInfo?.listPrice?.currencyCode}</span>

            <Button name="Add to cart"
                    onClick={handleAddToCart}
            />
        </div>
    )
}