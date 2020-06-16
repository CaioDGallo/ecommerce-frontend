//Action Types
export enum ProductsTypes {
    ADD_PRODUCT_TO_CART = '@products/ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_FROM_CART = '@products/REMOVE_PRODUCT_FROM_CART'
};

//Data Types
export interface Product {
    _id: string
    title: string
    price: number
    url: string  
    description: string
    imagePath: string
}

//State Type
export interface ProductsState{
    readonly data: Product[]
    readonly totalPrice: number
}