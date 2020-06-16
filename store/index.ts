import { createStore } from 'redux'
import { ProductsState, CartProduct, Product } from './product/types'
import { ProductsTypes } from './product/types'

const INITIAL_STATE: ProductsState = {
    data: [],
    totalPrice: 0,
    amountOfProducts: 0
}

function cart(state: ProductsState = INITIAL_STATE, action) {
    switch (action.type) {
        case ProductsTypes.ADD_NEW_PRODUCT_TO_CART:
            let filteredProducts: CartProduct[] = state.data.filter(product => product._id == action.data._id)
            if (filteredProducts.length < 1) {
                action.data.amount = 1
                return { ...state, data: [...state.data, action.data], totalPrice: state.totalPrice + action.data.price, amountOfProducts: state.amountOfProducts + 1 }
            } else {
                alert('Produto ja adicionado no carrinho')
                return { ...state }
            }
        case ProductsTypes.ADD_PRODUCT_TO_CART:
            state = findProductById(state, action.data, true)
            return { ...state, data: state.data, amountOfProducts: state.amountOfProducts + 1 }
        case ProductsTypes.REMOVE_PRODUCT_FROM_CART:
            return removeProductFromCart(state, action.data)
        case ProductsTypes.REMOVE_PRODUCT_AMOUNT:
            state = findProductById(state, action.data, false)
            return { ...state, data: state.data }
        default:
            return state;
    }
}

function findProductById(state: ProductsState, prdct: CartProduct, add: boolean): ProductsState {
    state.data.forEach((product, index) => {
        if (product._id == prdct._id) {
            if (add) {
                state.data[index].amount += 1
                state = { ...state, totalPrice: state.totalPrice + product.price }
            } else {
                if (state.data[index].amount > 1) {
                    //Removing 1 product from cart amount
                    state.data[index].amount -= 1
                    state = { ...state, totalPrice: state.totalPrice - product.price, amountOfProducts: state.amountOfProducts - 1 }
                } else if (state.data[index].amount == 1) {
                    //Removing product from cart
                    state.data[index].amount -= 1
                    state = { ...state, totalPrice: state.totalPrice - product.price }
                    state = removeProductFromCart(state, state.data[index])
                }
            }
        }
    })

    return state;
}

function removeProductFromCart(state: ProductsState, prodct: CartProduct): ProductsState {
    return { ...state, data: state.data.filter(product => product._id != prodct._id), totalPrice: state.totalPrice - (prodct.price * prodct.amount), amountOfProducts: state.amountOfProducts - prodct.amount }
}

const store = createStore(cart);

export default store;