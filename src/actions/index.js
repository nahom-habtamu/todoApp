export const getTodo = (id) => {
    return {
        type : "GET_TODO",
        payload : id
    }
}
export const getTodosInitiate = () => {
    return {
        type : "GET_TODOS_INITIATE"
    }
}
export const getTodos = (data) => {
    return {
        type : "GET_TODOS", 
        payload : data
    }
}
export const addTodo = (values) => {
    return {
        type : "ADD_TODO",
        payload : values
    }
}

export const addTodoInitiate = () => {
    return {
        type : "ADD_TODO_INITIATE"
    }
}

export const removeTodo = (id) => {
    return {
        type : "REMOVE_TODO",
        payload : id
    }
}

export const removeTodoInitiate = (id) => {
    return {
        type : "REMOVE_TODO_INITIATE",
        payload : id
    }
}

export const editTodoInitiate = (id,formValues) => {
    return {
        type : "EDIT_TODO_INITIATE",
        payload : {
            id,
            formValues
        }
    }
}

export const editTodo = (id,formValues) => {
    return {
        type : "EDIT_TODO",
        payload : {
            id,
            formValues
        }
    }
}

export const changeToEditMode = (id) => {
    return {
        type : "CHANGE_TO_EDIT_MODE",
        payload : id
    }
};

export const changeToNormalMode = (id) => {
    return {
        type : "CHANGE_TO_NORMAL_MODE",
        payload : id
    }
};

