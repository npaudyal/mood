import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import allReducers from './reducers';

const initialState ={

};
function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch(e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}
const persistedState = loadFromLocalStorage();

const middleware = [thunk];

const store = createStore(allReducers, persistedState, compose(

    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;