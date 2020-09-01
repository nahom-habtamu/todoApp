import { combineReducers} from 'redux';
import TodoReducer from './todoReducer';
import { reducer as formReducer} from 'redux-form';
export default combineReducers({
    todos : TodoReducer,
    form : formReducer
});