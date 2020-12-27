import React, { FC } from 'react'
import './playground.scss'
import { ResizeBar } from './ResizeBar'
import { Clipboard } from '../Clipboard/Clipboard'
import { QrCode } from '../Qrcode/Qrcode'

export interface IPlaygroundProps {
  active: boolean
}
export const Playground: FC<IPlaygroundProps> = ({
  active
}) => {

  return (
    <nav className={[
      'transpet-playground',
      active ? 'transpet-playground__active' : ''
    ].join(' ')}>
      <ResizeBar />
      <div className="transpet-pg-header">header</div>
      <div className="transpet-pg-container">
        <Clipboard />
        <QrCode />
      </div>
      <div className="transpet-pg-footer">footer</div>
    </nav>
  )
}