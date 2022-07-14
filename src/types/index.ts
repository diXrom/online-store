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