//Action Types
export enum ProductsTypes {
    ADD_PRODUCT_TO_CART = '@cart/ADD_PRODUCT_TO_CART',
    ADD_NEW_PRODUCT_TO_CART = '@cart/ADD_NEW_PRODUCT_TO_CART',
    REMOVE_PRODUCT_FROM_CART = '@cart/REMOVE_PRODUCT_FROM_CART',
    REMOVE_PRODUCT_AMOUNT = '@cart/REMOVE_PRODUCT_AMOUNT'
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
    imagePath: string
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