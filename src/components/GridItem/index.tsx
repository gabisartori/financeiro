import * as C from './style';

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
        <h1>Hello world</h1>
    )
}