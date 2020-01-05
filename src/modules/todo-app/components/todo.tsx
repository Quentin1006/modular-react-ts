import React, { FunctionComponent } from 'react'
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  MenuItem,
  Select,
} from '@material-ui/core'

import Todo, { TodoInterface, TodoState } from '../models/todo'

const TodoItem: FunctionComponent<TodoInterface> = (props) => {
  const handleChange = ev => (
    ev
  )

  return (
    <ListItem>
      <ListItemText primary={props.title} secondary={props.description}/>
      <ListItemSecondaryAction>
        <Select
          value={props.state}
          onChange={handleChange}
        >
          {Todo.allStates.map(state => {
            return (
              <MenuItem value={TodoState[state]} key={state}>{state}</MenuItem>
            )
          })}
        </Select>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoItem
