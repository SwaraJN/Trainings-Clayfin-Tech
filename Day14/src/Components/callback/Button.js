import React from 'react'

function Button({ handleClick, children }) {
  return (
    <div>
        
      <button onClick={handleClick} placeholder>Button</button>
    </div>
  )
}

export default React.memo(Button)