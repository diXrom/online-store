export interface ICard {
    id: number,
    name: string,
    quantity: number,
    brand: string,
    processor: string,
    size: number,
    popularly: boolean,
    amount: number,
    price: number,
}
export interface IBasket {
    name: string,
    amount: number,
    price: number,
}