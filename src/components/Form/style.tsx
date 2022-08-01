import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: white;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 0px 5px #ccc;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    
    input{
        margin-left: 0 20px;
        accent-color: black;
    }
    `;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: teal;
`;