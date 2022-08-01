import * as C from './style';
import SummaryItem from '../SummaryItem';

export default function Summary(){
    return(
        <C.Container>
            <SummaryItem text="Caixa 1"/>
            <SummaryItem text="Caixa 2"/>
            <SummaryItem text="Caixa 3"/>
        </C.Container>
        )
};