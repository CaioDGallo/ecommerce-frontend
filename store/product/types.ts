//Action Types
export enum ProductsTypes {
    ADD_PRODUCT_TO_CART = '@products/ADD_PRODUCT_TO_CART',
    ADD_NEW_PRODUCT_TO_CART = '@products/ADD_NEW_PRODUCT_TO_CART',
    REMOVE_PRODUCT_FROM_CART = '@products/REMOVE_PRODUCT_FROM_CART',
    REMOVE_PRODUCT_AMOUNT = '@products/REMOVE_PRODUCT_AMOUNT'
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

export interface CartProduct {
    _id: string
    title: string
    price: number
    amount: number
}

//State Type
export interface ProductsState{
    readonly products: CartProduct[]
    readonly totalPrice: number
    readonly amountOfProducts: number
}

//Action Type
export interface ProductsAction{
    readonly cartProduct: CartProduct
    readonly type: ProductsTypes
}