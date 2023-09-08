import {combineReducers} from 'redux';
import cartReducer from './cartReducer';

const reducers = combineReducers({
    value: cartReducer
})

export default reducers;