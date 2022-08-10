import GridItem from '../GridItem';
import * as C from './style';

type entrada = {
    id: number,
    desc: string,
    quant: string,
    gasto: boolean
}

type GridProps = {
    items: Array<entrada>,
    setItems: Function
}

export default function Grid(props: GridProps){
    const onDelete = (id: number) => {
        const newArray = props.items.filter((entrada) => entrada.id !== id);
        props.setItems(newArray);
        localStorage.setItem('entradas', JSON.stringify(newArray));
    }
    
    return(
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th>Descrição</C.Th>
                    <C.Th>Quantidade</C.Th>
                    <C.Th>Tipo</C.Th>
                    <C.Th style={{width: '10%'}}></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {props.items.map((item, index) => (
                        <GridItem key={index} item={item} onDelete={onDelete} />
                ))
                }
            </C.Tbody>
        </C.Table>
    )
}