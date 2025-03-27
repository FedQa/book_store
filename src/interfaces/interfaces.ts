export interface IBook {
    id: number;
    totalItems: number;
    volumeInfo: {
        title: string;
        authors: string[];
        publishedDate: number;
        description: string;
        pageCount: number;
        categories: [];
    };
    saleInfo: {
        listPrice: {
            amount?: number,
            currencyCode?: "RUB"
        },
    }
}

export interface BookPriceProps {
    price?: number;
    currencyCode?: string;
}

export interface CartProps {
    booksInCart: IBook[];
}
