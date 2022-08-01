import { IconType } from 'react-icons/lib';
import * as C from './style';

type SummaryItemProps = {
    text: string
    total: number
    icon: IconType
}

export default function SummaryItem(props: SummaryItemProps){
    return(
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{props.text}</C.HeaderTitle>
                <props.icon />
            </C.Header>
            <C.Total>R${props.total}</C.Total>
        </C.Container>
        )
};