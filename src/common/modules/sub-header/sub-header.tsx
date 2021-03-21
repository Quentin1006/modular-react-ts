import React, { FunctionComponent } from 'react'
import {
  Select,
  MenuItem,
} from '@material-ui/core'

import Line from './interfaces/line'
import { spacePhoneNumber } from './helpers/phone-number'

type SubHeader = {
  canSwitchLine: boolean
  children?: null | any
  classes?: string | any
  selectedLineId: string
  lines: Array<Line> | Line
  onSwitchLine(id: string): void
  onGoBack?: Function
}

const SubHeader: FunctionComponent<SubHeader> = ({
  canSwitchLine,
  children,
  classes = '',
  lines,
  onSwitchLine,
  onGoBack,
  selectedLineId,
}) => {
  const linesArray = Array.isArray(lines) ? lines : [ lines ]
  const isMultipleLines = linesArray.length > 1
  const selectedLine: Line | null = linesArray.find((line: Line) => line.id === selectedLineId) || null

  const handleChangeLine = (ev) => {
    const value: string = ev.target.value
    onSwitchLine(value)
  }

  const handleClickGoBack = (ev) => {
    return onGoBack ? onGoBack() : null
  }

  return (
    <div className={`sub-header--wrapper ${classes}`} style={{ display: 'flex', height: '45px' }}>
      <div className='sub-header--back'>
        <a href=' #' onClick={handleClickGoBack}>&#60; Retour</a>
      </div>
      <div className='sub-header--lines-selector'>
        {canSwitchLine && isMultipleLines
          ? (
            <Select
              id='select-line'
              value={selectedLine?.id}
              onChange={handleChangeLine}
            >
              {linesArray.map((line: Line) => (
                <MenuItem key={line.id} value={line.id}>
                  {spacePhoneNumber(line.phoneNumber)}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <div>{spacePhoneNumber(selectedLine?.phoneNumber)}</div>
          )
        }
      </div>
      <div className=''>{children}</div>
    </div>
  )
}

export default SubHeader
