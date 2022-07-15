export interface ICard {
    id: number,
    name: string,
    quantity: number,
    brand: string,
    processor: string,
    size: number,
    popularly: boolean,
    price: number,
}
export interface IBasket {
    id: number,
    name: string,
    amount: number,
    price: number,
}
export interface IFilters {
    brand: string[];
    size: number[];
    processor: string[];
    popularly: boolean[];
    quantity: number[];
    price: number[];
    select: string;
}