import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import OrderReducer from './OrderReducer';
import OrderStatusEditDialogReducer from './OrderStatusEditDialogReducer';

export default combineReducers({
    UserReducer,
    OrderReducer,
    OrderStatusEditDialogReducer,
})
