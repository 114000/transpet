import React, { useState, useCallback } from 'react'
import { Playground } from './components/Playground/Playground'

function App () {

  const [active, setActive] = useState(false)

  const toggleActive = useCallback(() => {
    setActive(!active)
    chrome.runtime.sendMessage({ cmd: 'toggle', value: !active })
  }, [setActive, active])

  return (
    <div className="app">
      <button type="button" className="fix-button" onClick={toggleActive}>TP</button>
      <Playground active={active} />
    </div>
  );
};


export default App