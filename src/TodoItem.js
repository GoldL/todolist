import React, {
  Component
} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { handleItemDel, index } = this.props
    handleItemDel(index)
  }

  render () {
    const { content } = this.props
    return (
      <div onClick={this.handleClick}>{content}</div>
    )
  }
}

export default TodoItem