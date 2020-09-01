import todoApi from '../apis';
import { call , put} from 'redux-saga/effects';
import * as actions from '../actions';

const getTodosFromApi = () => {
    return todoApi.get('/todos');
}

const addTodoToApi = () => {
    const values = { 
        title : "Title ",
        description : "Add your description"
    }
    return todoApi.post('/todos',values);
}

const removeTodoFromApi = (id) => {
    return todoApi.delete(`/todos/${id}`);
}

const editTodoFromApi = (id,formValues) => {
    return todoApi.put(`/todos/${id}`,formValues);
}

export function* getTodosSaga(){
    try {
        const response = yield call(getTodosFromApi);
        yield put(actions.getTodos(response.data));
    } 
    catch (error) {
        console.log(error.message);
    } 
}

export function* addTodosSaga(){
    try {
        const response = yield call(addTodoToApi);
        console.log(response.data);
        yield put(actions.addTodo(response.data));
    } 
    catch (error) {
        console.log(error.message);
    } 
}

export function* removeTodosSaga(action){
    try {
        yield call(removeTodoFromApi,action.payload);
        yield put(actions.removeTodo(action.payload));
    } 
    catch (error) {
       console.log(error.message); 
    }
}

export function* editTodosSaga(action){
    try {
        yield call(editTodoFromApi,action.payload.id,action.payload.formValues);
        yield put(actions.editTodo(action.payload.id,action.payload.formValues));
    } 
    catch (error) {
        console.log(error.message);
    }
}