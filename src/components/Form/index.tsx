import React, { useState } from 'react';
import * as C from './style';

type FormProps = {
    handleAdd: Function
} 


export default function Form(props: FormProps){

    function generateId(){
        const id = Math.round(Math.random()*1000);
        return id;
    }

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

        const entrada = {
            id: generateId(),
            desc: descricao,
            quant: Number(quantia),
            gasto: isDespesa
        };

        props.handleAdd(entrada);

        setDescricao("");
        setQuantia("");
    };


    return (
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.Input 
                    value={quantia}
                    type="number"
                    onChange={e => setQuantia(e.target.value)}
                />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input
                    type="radio"
                    defaultChecked
                    id='rReceita'
                    name="group1"
                    onChange={() => setIsDespesa(!isDespesa)}
                />
                <C.Label htmlFor='rReceita'>Receita</C.Label>
                <C.Input 
                    type="radio"
                    id='rDespesa'
                    name="group1"
                    onChange={() => setIsDespesa(!isDespesa)}
                />
                <C.Label htmlFor='rDespesa'>Despesa</C.Label>
            </C.RadioGroup>
            <C.Button
                onClick={handleSave}
            >Adicionar</C.Button>
        </C.Container>
        );
}