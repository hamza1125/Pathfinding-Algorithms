import './MazeGrid.css';



function MazeGrid() {
  let maze = [
    ["wall", "wall", "wall", "wall"],
    ["start", "path", "path", "wall"],
    ["wall", "wall", "path", "wall"],
    ["wall", "wall", "path", "end"],
  ]
  return (
    <div className='maze-grid'>
      <button className='maze-button'>Refresh Maze</button>
      <div className='maze'>
        {maze.map((row, rowIndex) => (
          <div className='row'>
            {row.map((cell, cellIndex) => (
              <div className={`cell ${cell}`}></div>

            ))}
            </div>
        ))}
        {/* <div className='row'>
          <div className='cell wall'></div>
          <div className='cell path'></div>
          <div className='cell start'></div>
          <div className='cell end'></div>
        </div> */}
      </div>
    </div>
  );
}

export default MazeGrid;
