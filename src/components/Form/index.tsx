import React, { useState } from 'react';
import * as C from './style';


export default function Form() {
    
    const [receita, setReceita] = useState("");
    const [despesa, setDespesa] = useState("");
    const [isDespesa, setIsDespesa] = useState(false);

    
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
            <C.Button>Adicionar</C.Button>
        </C.Container>
        );
}