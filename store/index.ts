import { createStore } from 'redux'
import { ProductsState, CartProduct, ProductsAction } from './product/types'
import { ProductsTypes } from './product/types'

const INITIAL_STATE: ProductsState = {
    products: [],
    totalPrice: 0,
    amountOfProducts: 0
}

function cart(state: ProductsState = INITIAL_STATE, action: ProductsAction): ProductsState{
    switch (action.type) {
        case ProductsTypes.ADD_NEW_PRODUCT_TO_CART:
            if (cartHasProductAlready(state.products, action.cartProduct)) {
                action.cartProduct.amount = 1
                return { ...state, products: [...state.products, action.cartProduct], totalPrice: state.totalPrice + action.cartProduct.price, amountOfProducts: state.amountOfProducts + 1 }
            } else {
                alert('Produto ja adicionado no carrinho')
                return { ...state }
            }
        case ProductsTypes.ADD_PRODUCT_TO_CART:
            state = findProductById(state, action.cartProduct, true)
            return { ...state, products: state.products, amountOfProducts: state.amountOfProducts + 1 }
        case ProductsTypes.REMOVE_PRODUCT_FROM_CART:
            return removeProductFromCart(state, action.cartProduct)
        case ProductsTypes.REMOVE_PRODUCT_AMOUNT:
            state = findProductById(state, action.cartProduct, false)
            return { ...state, products: state.products }
        default:
            return state;
    }
}

function findProductById(state: ProductsState, prdct: CartProduct, add: boolean): ProductsState {
    state.products.forEach((product, index) => {
        if (product._id == prdct._id) {
            if (add) {
                state.products[index].amount += 1
                state = { ...state, totalPrice: state.totalPrice + product.price }
            } else {
                if (state.products[index].amount > 1) {
                    //Removing 1 product from cart amount
                    state.products[index].amount -= 1
                    state = { ...state, totalPrice: state.totalPrice - product.price, amountOfProducts: state.amountOfProducts - 1 }
                } else if (state.products[index].amount == 1) {
                    //Removing product from cart
                    state.products[index].amount -= 1
                    state = { ...state, totalPrice: state.totalPrice - product.price }
                    state = removeProductFromCart(state, state.products[index])
                }
            }
        }
    })

    return state;
}

function removeProductFromCart(state: ProductsState, prodct: CartProduct): ProductsState {
    return { ...state, products: state.products.filter(product => product._id != prodct._id), totalPrice: state.totalPrice - (prodct.price * prodct.amount), amountOfProducts: state.amountOfProducts - prodct.amount }
}

function cartHasProductAlready(cartProducts: CartProduct[], currentProduct: CartProduct): boolean{
    let filteredProducts: CartProduct[] = cartProducts.filter(product => product._id == currentProduct._id)
    return filteredProducts.length < 1
}

const store = createStore(cart);

export default store;