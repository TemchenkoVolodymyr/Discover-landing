import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './combineRoot'
import thunk from 'redux-thunk';
import {initialState} from "./InitialState";




const store = createStore(reducer, initialState,
    compose(
        applyMiddleware(thunk)
    )
);

export type RootState  = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export default store;