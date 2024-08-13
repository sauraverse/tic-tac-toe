
import useTicTacToe from '../hooks/use-tic-tac-toe'


function TicTacToe() {
  
  const {board, calculateWinner, resetGame, getStatusMessage, handleClick} = useTicTacToe()

  return (
    <div className='game'>
      
      <div className='status'>
        {getStatusMessage()}
      </div>

      <div className='board'>
        {board.map((_,index) =>{
          return <button className='cell' key={index} onClick={()=>handleClick(index)}> {board[index]} </button>
        })}
      </div>

      <div className='reset'>
        <button onClick={resetGame}>Reset Game</button>
      </div>

    </div>
    
  )
}

export default TicTacToe
