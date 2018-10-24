import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: ['react', 'vue']
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDel (index) {
    const list = [...this.state.list]
    list.splice(index, 1)

    this.setState({
      list
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
          {
            this.state.list.map((item, index) => {
              // return <li key={index} onClick={this.handleItemDel.bind(this, index)}>{item}</li>
              return <li key={index} onClick={this.handleItemDel.bind(this, index)} dangerouslySetInnerHTML={{ __html: item }}></li>
            })

          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
