import * as C from './style';


export default function Form() {
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
                    
                /> Renda
                <C.Input 
                    type="radio"
                /> Despesa
            </C.RadioGroup>
            <C.Button>Adicionar</C.Button>
        </C.Container>
        );
}