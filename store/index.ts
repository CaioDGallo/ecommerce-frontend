import { createStore } from 'redux'
import { ProductsState } from './product/types'
import { ProductsTypes } from './product/types'

const INITIAL_STATE: ProductsState = {
    data: [],
    totalPrice: 0
}

function cart(state: ProductsState = INITIAL_STATE, action) {
    switch (action.type) {
        case ProductsTypes.ADD_PRODUCT_TO_CART:
            return { ...state, data: [...state.data, action.data], totalPrice: state.totalPrice + action.data.price }
        case ProductsTypes.REMOVE_PRODUCT_FROM_CART:
            return { ...state, data: state.data.filter(product => product._id != action.data._id), totalPrice: state.totalPrice - action.data.price }
        default:
            return state;
    }
}

const store = createStore(cart);

export default store;