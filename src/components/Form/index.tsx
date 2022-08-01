import React, { useState } from 'react';
import * as C from './style';


export default function Form() {
    
    const [descricao, setDescricao] = useState("");
    const [quantia, setQuantia] = useState("");
    const [isDespesa, setIsDespesa] = useState(false);

    const handleSave = () => {
        if (!descricao || !quantia) {
            alert("Preencha todos os campos");
            return;
        } else if (Number(quantia) < 0){
            alert("Quantia deve ser positiva");
            return;
        }
        alert("Salvo com sucesso");
    };


    return (
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.Input />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input
                    type="radio"
                    defaultChecked
                    
                />
                <C.Label>Receita</C.Label>
                <C.Input 
                    type="radio"
                />
                <C.Label>Despesa</C.Label>
            </C.RadioGroup>
            <C.Button
                onClick={handleSave}
            >Adicionar</C.Button>
        </C.Container>
        );
}