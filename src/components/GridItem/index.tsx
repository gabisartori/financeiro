import * as C from './style';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
  } from "react-icons/fa";


type entrada = {
    id: number,
    desc: string,
    quant: string,
    gasto: boolean
}

type GridItemProps = {
    key: number,
    item: entrada,
    onDelete: Function
}

export default function GridItem(props: GridItemProps){
    return(
        <C.Tr>
            <C.Td>{props.item.desc}</C.Td>
            <C.Td>{props.item.quant}</C.Td>
            <C.Td style={{textAlign: 'center'}}>{props.item.gasto? (
                <FaRegArrowAltCircleDown color="red" />) : (
                <FaRegArrowAltCircleUp color="green" />)}
            </C.Td>
            <C.Td style={{textAlign: 'center'}}>
                <FaTrash onClick={() => props.onDelete(props.item.id)} />
            </C.Td> 

        </C.Tr>
    )
}