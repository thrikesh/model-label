import React, { useState } from 'react'
import './ModelComponent.css'
function ModelComponent() {
    const [count,setCount]=useState(1)
    [totalcount,setTotalCount]=useState('')
    const [actualnumber,setActualNumber]=useState('')
    const [para,setPara]=useState('Technology affects people all over the world. Advances in technology have made our countries safer and our lives easier, they have also negatively affected our lives. Technology have brought us online banking, smart cars, smart TVs, lightning fast computers, and the virtual reality.')
    const wordcount = () =>{
        if (setPara===' ' && setPara===',' && setPara==='.') {
            totalcount=setCount(setCount+1)

        }

    }
    const guessnumber = () =>{
        if (actualnumber===5) {
            console.log('true')    
        }
        else
        {
            console.log('false')
        }
    }
    
  return (
    <React.Fragment>
        <center>
            <div>
                <h1>Guess the Number</h1>
                
                <label htmlFor='number'>Enter the Number:</label>
                    <input
                    id='number'
                    name='number'
                    placeholder='enter the number'
                    value={actualnumber}
                    ></input>
                    <br></br>
                <button onClick={guessnumber}>actual number</button>
                <br></br>
                <h2>Word counter</h2>
                <br></br>
                <button onClick={wordcount}>paste</button>
            </div>
        </center>
    </React.Fragment>
    
  )
}

export default ModelComponent