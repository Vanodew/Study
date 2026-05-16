// function App() {
//   return (
//   <div>
//     <h1>hello</h1>
//     <Timer />
//   </div>
//   )
// }

// function Timer() {
//   return <h1>hello!!!</h1>
// }

// export default App

import { useState, useEffect } from 'react'

function App() {
  const [seconds, setSeconds] = useState(0)      // stores the current time
  const [running, setRunning] = useState(false)  // stores if timer is on or off
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  const format = (n) => String(n).padStart(2, '0')

  useEffect(() => {
    if (!running) return  // if not running, do nothing

    const interval = setInterval(() => {
      setSeconds(s => s + 1)  // every 1000ms, add 1 to seconds
    }, 1000)

    return () => clearInterval(interval)  // cleanup when stopped
  }, [running])

  return (
    <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100vh' }}>
      <h1 style={{ fontSize: '120px', margin: 0 }}>{format(hours)}:{format(minutes)}:{format(secs)}</h1>
      <button style={{ marginTop: '50px'}} onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}


export default App