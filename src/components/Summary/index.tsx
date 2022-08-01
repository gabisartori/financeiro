import * as C from './style';
import SummaryItem from '../SummaryItem';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa";

export default function Summary(){
    return(
        <C.Container>
            <SummaryItem text="Receita" total={12.8} icon={FaRegArrowAltCircleUp}/>
            <SummaryItem text="Despesas" total={5.4} icon={FaRegArrowAltCircleDown}/>
            <SummaryItem text="Saldo" total={12.8-5.4} icon={FaDollarSign}/>
        </C.Container>
        )
};