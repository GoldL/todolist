import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

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

// PropTypes 进行类型检查
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number
}

TodoItem.defaultProps = {
  name: 'Ljd'
}

export default TodoItem