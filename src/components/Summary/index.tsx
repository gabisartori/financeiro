import * as C from './style';
import SummaryItem from '../SummaryItem';

export default function Summary(){
    return(
        <C.Container>
            <SummaryItem text="Receita" total={12.8}/>
            <SummaryItem text="Despesas" total={5.4}/>
            <SummaryItem text="Saldo" total={12.8-5.4}/>
        </C.Container>
        )
};