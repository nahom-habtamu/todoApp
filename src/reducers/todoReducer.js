let INITIAL = [];
export default (state = INITIAL , action) => {
    switch (action.type) {
        case "ADD_TODO":
            try {
                if(action.payload){
                    return [
                        ...state,
                        action.payload
                    ]
                }
                else {
                    return state;
                }
            } 
            catch (error) {
                console.log(error.message);    
            }
            break;

        case "REMOVE_TODO":
            const newState = state.filter( todo => todo._id !== action.payload);
            console.log(newState);
            return newState

        case "GET_TODOS":
            if(action.payload){
                return [ 
                    ...state,
                    ...action.payload 
                ]
            }
            else {
                return state
            }
        case "CHANGE_TO_EDIT_MODE" :
            const editedState = state.map(todo => {
                if(todo._id === action.payload){
                     todo.inEditMode = !todo.inEditMode
                }
                return todo;
            });
            return editedState;
        
        case "CHANGE_TO_NORMAL_MODE":
            const normalState = state.map(todo => {
                if(todo._id === action.payload){
                     todo.inEditMode = !todo.inEditMode
                }
                return todo;
            });
            return normalState;

        case "EDIT_TODO":
            const edited = state.map(todo => {
                if(todo._id === action.payload.id){
                    todo.title = action.payload.formValues.title
                    todo.description = action.payload.formValues.description
                }
                return todo;
            });
            return edited;
        default:
            return state;
    }
}