import Todo from './Todo';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos,getTodosInitiate } from '../actions';
import Edit from './Edit';
import TodoWrapper from './styled/TodoWrapper';
class Todos extends Component {

    componentDidMount(){
        this.props.getTodosInitiate();
    }

    renderTodos = () => {
        return this.props.todos.map(todo => {
            if(todo.inEditMode === false){
                return (
                    <Todo key={todo.id} {...todo}/>
                )
            }
            else {
                return <Edit {...todo}/>
            }   
            
        });
    }
    render() {
        return (
            <TodoWrapper>
                {this.renderTodos()}
            </TodoWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos : state.todos 
    }
}
export default connect(mapStateToProps,{ getTodos,getTodosInitiate})(Todos);
