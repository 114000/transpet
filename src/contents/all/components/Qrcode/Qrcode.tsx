import React, { FC, useState, useRef, useCallback } from 'react'
import QRCode from 'qrcode'


export interface IQrCodeProps {}
export const QrCode: FC<IQrCodeProps> = (

) => {
  console.log('????>>>>')
  const [content, setContent] = useState('')
  const canvas = useRef(null)

  const generate = useCallback((text: string) => {
    if (!canvas.current) return
    QRCode.toCanvas(canvas.current, text, function (error: any) {
      if (error) console.error(error)
      console.log('success!');
    })
  }, [])

  return (
    <div>
      <input value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={() => generate(content)} type="button">generate</button>
      <br/>
      current web Url
      <input value={window.location.href} />
      <button onClick={() => generate(window.location.href)} type="button">generate</button>
      <br/>
      <canvas ref={canvas} />
    </div>
  )
}