import { useState } from "react"

const Test = () => {
    const [range, setRange] = useState(0)
  return (
    // <div>
    // <h1>{range}</h1>
    // <input type="range" min={0} max={100} onChange={(e)=>{setRange(e.target.value)}}/>
    // </div>
    <h1>Test</h1>
  )
}

export default Test