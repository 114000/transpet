import { hot } from 'react-hot-loader/root'
import React, { useCallback, useState } from 'react'

import './App.scss'

const App = () => {

    const [cliplist, setCliplist] = useState([])

    const handleClick = useCallback(() => {
      chrome.storage.local.get('clipboardList', ({ clipboardList }) => {
        console.log('????')
        setCliplist(clipboardList)
      })
    }, [])
    
  return (
    <div className="app">
      <h1 className="title">popup page</h1>
      <button type="button" onClick={handleClick}>get list</button>

      { cliplist.map((str, i) => (
        <div key={i}>{str}</div>
      ))}
    </div>
  );
};

export default hot(App);
