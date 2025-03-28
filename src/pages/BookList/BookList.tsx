// @ts-ignore
import cs from './BookList.module.css'
import {BookCard} from "../../components/BookCard/BookCard";
import {IBook} from "../../interfaces/interfaces";
import {useLocation} from "react-router-dom";
import React from "react";


import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type BookListProps = {
    books?: IBook[];
}

export const BookList = (props?: BookListProps) => {
    const location = useLocation();
    const books = location.state.items;
    console.log(books);
    return (
        <div className={cs.swiperWrapper}>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                centeredSlides={true}
            >
                {books.map((book:IBook) => (
                    <SwiperSlide className={cs.slide}>
                        <BookCard key={book.id} book={book} className={cs.card}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}