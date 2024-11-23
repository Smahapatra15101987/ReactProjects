export default function Log({ turns }) {

    return (<ol id="log">
        {/* {turns.map((turn) => {
            <li key={`${turn.square.col}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>
        })} */}
        {turns.map(turn=><li key={`${turn.square.col}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>)}
    </ol>)
}