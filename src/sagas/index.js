import {takeEvery } from 'redux-saga/effects';
import { getTodosSaga,addTodosSaga,removeTodosSaga,editTodosSaga} from '../sagas/todoSaga';

export default function* watchSaga(){
    yield takeEvery("ADD_TODO_INITIATE",addTodosSaga);
    yield takeEvery("GET_TODOS_INITIATE",getTodosSaga);
    yield takeEvery("REMOVE_TODO_INITIATE",removeTodosSaga);
    yield takeEvery("EDIT_TODO_INITIATE",editTodosSaga);
};