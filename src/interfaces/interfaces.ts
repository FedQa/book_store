export interface IBook {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        pageCount: number;
        categories: string[];
        language: string;
    };
    saleInfo?: {
        country: string;
        listPrice: {
            amount: number;
            currencyCode: string;
        }
    }
}

export interface BookPriceProps {
    price?: number;
    currencyCode?: string;
}