import {IBook} from "../../interfaces/interfaces";
// @ts-ignore
import cs from './BookCard.module.css'
import {Button} from "../Button/Button";
// @ts-ignore
import rubIcon from "../../assets/rub-icon.svg"
// @ts-ignore
import likeIcon from "../../assets/like-icon.svg"

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

    const handleAddToLiked = () => {
        console.log(book);
    }
    return (
        <div className={cs.bookCard}>
            <div className={cs.columns}>
                <div className={cs.left}>
                    <h3 className={cs.title}>Title: {book.volumeInfo.title}</h3>
                    <span className={cs.authors}>
                Authors: {book.volumeInfo.authors?.join(", ")}
                        <a onClick={handleAddToLiked} style={{display: "inline"}}>
                <img src={likeIcon}/>
            </a>
            </span>
                </div>


                <div className={cs.right}>
                    <img
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        className={cs.previewImage}
                    />
                </div>
            </div>


            <span className={cs.description}>{book.volumeInfo.description}</span>


            <div className={cs.priceWrapper}>
                <span className={cs.amount}>{book.saleInfo?.listPrice?.amount}</span>
                <span className={cs.currencyCode}>{book.saleInfo?.listPrice?.currencyCode}</span>
            </div>

            <Button name="Add to cart"
                    className={cs.addToCartBtn}
                    onClick={handleAddToCart}
            />
        </div>
    )
}