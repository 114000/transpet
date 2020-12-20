import React, { useState } from 'react'
import { Playground } from './components/Playground/Playground'

function App () {

  const [active, setActive] = useState(false)

  return (
    <div className="app">
      <button type="button" className="fix-button" onClick={() => setActive(!active)}>TP</button>
      <Playground active={active} />
    </div>
  );
};


export default App