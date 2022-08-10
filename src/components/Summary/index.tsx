import * as C from './style';
import SummaryItem from '../SummaryItem';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa";

type SummaryProps = {
    receitas: string
    despesas: string
    total: string
}

export default function Summary(props: SummaryProps){
    return(
        <C.Container>
            <SummaryItem text="Receita" total={props.receitas} icon={FaRegArrowAltCircleUp}/>
            <SummaryItem text="Despesas" total={props.despesas} icon={FaRegArrowAltCircleDown}/>
            <SummaryItem text="Total" total={props.total} icon={FaDollarSign}/>
        </C.Container>
        )
};