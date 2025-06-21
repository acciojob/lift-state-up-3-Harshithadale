import React from 'react'

const ChildComponent2 = ({setselectedOption}) => {
  return (
     <div className="ch2">
          <h2>Child Component 2</h2>
          <button onClick={()=>{
            setselectedOption("Option 2")
          }}>Option 2</button>
    </div>
  )
}

export default ChildComponent2