import React, { Component } from 'react'
import { connect } from 'react-redux';
import Todos from './Todos';
import { addTodoInitiate,addTodo } from '../actions';
import { Welcome,AddButton} from './styled/StyledTodo';
import { AddTodoButton } from './styled/Buttons';
class App extends Component {

    handleAddTodos = () => {
        this.props.addTodoInitiate();
    }
    
    render() {
        return (
            <React.Fragment>  
                <Welcome>
                    Welcome to our to do app
                </Welcome>
                <Todos/>
                <AddButton>
                    <AddTodoButton onClick = { this.handleAddTodos}>
                        ADD
                    </AddTodoButton>
                </AddButton>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}
export default connect(mapStateToProps, { addTodo,addTodoInitiate })(App);
