import { createStore, combineReducers } from 'redux'
import users_reducer from './users_reducer';


let reducers = combineReducers({
    users: users_reducer,
})

let store = createStore(reducers);



export default store;