import * as C from './style';

type SummaryItemProps = {
    text: string
}

export default function SummaryItem(props: SummaryItemProps){
    return(
        <C.Container>
            {props.text}
        </C.Container>
        )
};