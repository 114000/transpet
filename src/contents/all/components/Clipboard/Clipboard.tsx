import React, { FC, useEffect, useState, useCallback } from 'react'

export interface IClipboardProps {}
export const Clipboard: FC<IClipboardProps> = (

) => {

  const [cliplist, setCliplist] = useState<string[]>([])

  const updateClipdata = useCallback(() => {
    chrome.storage.local.get('clipboardList', ({ clipboardList }) => {
      console.log('????')
      setCliplist(clipboardList)
    })
  }, [setCliplist])

  useEffect(() => {

    updateClipdata()
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
        sendResponse('我收到了你的消息！')
        console.log('background message', request)
        updateClipdata()
    })
  }, [updateClipdata])

  return (
    <div>
      { cliplist.map((str, i) => (
        <div key={i}>{str}</div>
      ))}
    </div>
  )
}