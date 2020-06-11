import React from 'react';

function App() {

  const [state, setState] = React.useState(
    {
      isPlayerOne: true,
    }
  )
  const [matrix, setMatrix] = React.useState([
    ['','',''], 
    ['','',''], 
    ['','', '']
  ]);

  const handleClick = (i, j) => {
    if(matrix[i][j]){
      return;
    }
    const newMatrix = matrix;
    if(state.isPlayerOne){
      newMatrix[i][j] = 'X';
    } else {
      newMatrix[i][j] = 'O';
    }
    setState({
      isPlayerOne: !state.isPlayerOne
    })
    setMatrix(newMatrix)
  }

  return (
    <>  
      <div class="status">
        Next player: {state.isPlayerOne ? 'X' : 'O'}
      </div>
      <div class="board">
        {
          matrix.map((row, i) => (
            <div className="board-row">
              {row.map((item,j) => (
                <button className="square" onClick={() => handleClick(i,j)}>
                  {item}
                </button>
              ))}
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
