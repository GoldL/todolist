import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: ['react', 'vue']
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDel = this.handleItemDel.bind(this)
  }

  handleInputChange (e) {
    const inputValue = e.target.value
    this.setState(() => ({
      inputValue
    }))
  }

  handleBtnClick () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDel (index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          handleItemDel={this.handleItemDel} />
      )
    })
  }

  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="input">请输入内容</label>
          <input id="input" type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
