import React from 'react';

export const Solution = (props) => {
  let solutionPegs = []
  let solutionClass = ''
  const isHidden = (props.state.defeat && !props.state.victory) ? '' : ' hidden'
  //const playAgain = (!props.state.defeat && props.state.victory) ? '' : ' hidden' 
  const playAgain =( (!props.state.defeat && props.state.victory) || (props.state.defeat && !props.state.victory)) ? '' : ' hidden' 
  for (let i = 0; i < props.state.trueRow.length; i++) {
    solutionClass = props.state.trueRow[i]
    solutionPegs.push(
      <div
        className={'color-holder ' + solutionClass}
        key={'s_' + i}>
      </div>)
  }
  return (
    <div className='solution colors'>
   
   {/*
     <div>{solutionPegs}</div>
   */}
   
      <div className={isHidden}>
        <p>Solution:</p>
        {solutionPegs}
      </div>
      <div className={playAgain}>
        <p id="p2" onClick={props.newGame}> Play Again?</p>
      </div>
    </div>
  )
}