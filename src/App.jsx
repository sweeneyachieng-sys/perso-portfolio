import React from 'react'
import AddProject from './component/AddProject'

function App() {
  
  return (
    <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '20px', marginTop: '20px', borderRadius:'8px'}}>
    <h1 >Personal Project Showcase App</h1>
    <AddProject  />
    </div>
  )
}

export default App
