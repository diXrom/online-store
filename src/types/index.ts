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
    filters: string[];
    quantity: number[];
    price: number[];
    select: string;
}

export type ObjectType = Record<PropertyKey, unknown>;

export type PickByValue<OBJ_T, VALUE_T> = Pick<OBJ_T, {
    [K in keyof OBJ_T]: OBJ_T[K] extends VALUE_T ? K : never
}[keyof OBJ_T]>;

export type ObjectEntries<OBJ_T> = {
    [K in keyof OBJ_T]: [keyof PickByValue<OBJ_T, OBJ_T[K]>, OBJ_T[K]]
}[keyof OBJ_T][];