import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeTodoInitiate,changeToEditMode } from '../actions';
import { Title , Description , MainTodo} from './styled/StyledTodo';
import { EditButton , RemoveButton} from './styled/Buttons';

class Todo extends Component {

    state = {
        resolved : false
    }

    handleTodoDelete = (id) => {
        console.log(id);
        this.props.removeTodoInitiate(id);
    }

    handleChangeToEditMode = (id) => {
        this.props.changeToEditMode(id);
    }

    handleChange = (event) => {
        this.setState(previousState => {
            return {
                resolved : !previousState.resolved
            }
        });  
    }
    render() {
        const { title , description } = this.props;
        const className = this.state.resolved ? "true" : "false";
        return (
            <MainTodo resolved = {className}>
                <input id="check" type="checkbox" onChange = {(event)=> this.handleChange(event)}/>
                <Title> {title} </Title>
                <Description> {description} </Description>   

                <EditButton 
                    onClick = { () => this.handleChangeToEditMode(this.props._id) }>Edit
                </EditButton>

                <RemoveButton
                    onClick = { () => this.handleTodoDelete(this.props._id) }>Remove
                </RemoveButton> 

            </MainTodo>
        );
    }
};
export default connect(null,{removeTodoInitiate,changeToEditMode })(Todo);
