import { combineReducers, createStore } from 'redux'
import cartReducer from './cart/cartReducer'
import authReducer from './auth/authReducer'
import { AuthState } from './auth/types';
import { ProductsState } from './cart/types';

export interface ApplicationState{
    cart: ProductsState
    auth: AuthState
}

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer
})

const store = createStore(rootReducer);

export default store;