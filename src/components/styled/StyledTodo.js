import styled, { css } from 'styled-components';

const MainTodo = styled.div`
    ${p => p.resolved === "true" ? css`
        margin : auto;
        height: 120px;
        border-bottom : 2px solid gray;
        border-radius: 50px;
        text-decoration: line-through;
        font-style: italic;
    ` : css`
        margin : auto;
        height: 120px;
        border-bottom : 2px solid gray;
        border-radius: 50px;
    `}
`;

export {MainTodo};

const Title = styled.p`
    text-transform: uppercase;
    color:green;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 2px;
`;

export { Title };

const Description = styled.p`
    color:gray;
    font-style: italic;
`;

export { Description };


const AddForm = styled.div`
    padding-top : 10px;
    margin : auto;
    width: 100%;
    height: 120px;
    border-bottom: 1px solid black;
`;

export { AddForm };
const Welcome = styled.div`
    margin-top : 5px;
    color: white;
    font-size : 30px;
    text-transform : uppercase;
    text-align : center;
    width : 100%;
    height : 20%;
    background : -webkit-linear-gradient(black,white);
`;

export { Welcome };

const AddButton = styled.div`
    margin: auto;
    width: 400px;
    height: 100%;
`;

export { AddButton };

const Input = styled.input`
    width: 90%;
    border: 2px solid rgb(162, 194, 162);
    border-radius: 5px;

    &:focus {
        border: 2px solid rgb(127, 155, 127);
        color : brown 
    }
`;

export { Input };