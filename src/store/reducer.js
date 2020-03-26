import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, actions) => {
  if (actions.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = actions.value
    return newState
  }
  if (actions.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue) {
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
    }
    return newState
  }
  if (actions.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(actions.index, 1)
    return newState
  }
  return state
}