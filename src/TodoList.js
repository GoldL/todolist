import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import {
  getInputChangeAction,
  addTodoItem,
  deleteTodoItem
} from './store/actionCreators'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    const { inputValue, list } = this.state
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            value={inputValue}
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ width: '300px', marginTop: '10px' }}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemClick.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = addTodoItem()
    store.dispatch(action)
  }

  handleItemClick(index) {
    const action = deleteTodoItem(index)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default TodoList
