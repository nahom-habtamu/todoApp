import styled from 'styled-components';
const AddTodoButton = styled.button`
    margin-top: 5px;
    height: 40px;
    width: 400px;
    background : white;
    border : 1px solid rgb(47, 47, 212);
    color : rgb(47, 47, 212);

    &:hover {
        background : rgb(47, 47, 212);
        color : white;
    }
`;
export { AddTodoButton };

const EditButton = styled.button`
    color : white;
    background : purple;
    width : 40px;
    height : 30px;
    border : 1px solid purple;
    margin-left : 3px;
    border-radius : 3px;
    margin-top: 3px;
    font-size : 15px;
    &:hover {
        background : rgb(87, 4, 87);
        color : white;
    }
`;

const RemoveButton = styled.button`
    color : white;
    background : rgb(156, 5, 5);
    width : 80px;
    height : 30px;
    border : 1px solid rgb(156, 5, 5);
    margin-left : 3px;
    margin-top : 3px;
    border-radius : 3px;
    font-size : 15px;
    &:hover {
        background : rgb(117, 3, 3);
        color : white;
    }
`;

const SaveButton = styled.button`
    color : white;
    background : rgb(8, 165, 8);
    width : 80px;
    height : 30px;
    border : 1px solid rgb(8, 165, 8);
    margin-left : 3px;
    margin-top : 3px;
    border-radius : 3px;
    font-size : 15px;
    &:hover {
        background : rgb(7, 95, 7);
        color : white;
    }
`;

export { EditButton , RemoveButton, SaveButton };