import React, { FC, useEffect, useState } from 'react'

export interface IClipboardProps {}
export const Clipboard: FC<IClipboardProps> = (

) => {

  const [cliplist, setCliplist] = useState([])

  useEffect(() => {
    chrome.storage.local.get('clipboardList', ({ clipboardList }) => {
      console.log('????')
      setCliplist(clipboardList)
    })
  }, [])

  return (
    <div>

      123123

      { cliplist.map((str, i) => (
        <div key={i}>{str}</div>
      ))}
    </div>
  )
}