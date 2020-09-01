import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeToNormalMode,editTodoInitiate } from '../actions';
import { AddForm, Input} from './styled/StyledTodo';
import { SaveButton } from './styled/Buttons';

class Edit extends Component {

    state = {
        title : "",
        description : "",
        error : {
            title : "",
            des : "",
        }
    }
    onTitleChange = (event) => {
        event.preventDefault();
        let newValue = event.target.value;
        if(newValue.length <= 15){
            this.setState({
                title : newValue
            })
        }
        else {
            this.setState( prevState => {
                prevState.error.title = "Title Too Long"
            });
        }
    }    
    onDesChange = (event) => {
        event.preventDefault();
        let newValue = event.target.value;
        if(newValue.length <= 45){
            this.setState({
                description : newValue
            });
        }
        else {
            this.setState( prevState => {
                prevState.error.description = "Title Too Long"
            });
        }
    }

    handleSubmit = (id) => {
       const formValues = {
           title : this.state.title,
           description : this.state.description,
       }
       
       this.props.editTodoInitiate(id,formValues);
       this.props.changeToNormalMode(id);
    } 
    render() {
        return (
                <AddForm>
                    <Input placeholder = " title" onChange = {(event) => this.onTitleChange(event) } value = {this.state.title}/>
                    <Input placeholder = " description" onChange = {(event) => this.onDesChange(event) } value = {this.state.description}/>
                    <SaveButton onClick={() => this.handleSubmit(this.props._id)}>
                        Save
                    </SaveButton>
                </AddForm>
        )
    }
}
export default connect(null, { changeToNormalMode,editTodoInitiate })(Edit);