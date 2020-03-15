import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      // 우클릭시 메뉴가 열리는 이벤트
      onContextMenu={
        (e) => {
          // 메뉴가 열리지 않음
          e.preventDefault()
          onDecrement()
        }
      }
      // onClick 이벤트와 겹치지 않으려면..?
      onDoubleClick={onSetColor}
      style={{backgroundColor: color}}>
        {number}
      </div>
  )
}

//propTypes 와 PropTypes 헷갈리지 않기
Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement is not defined'),
  onDecrement: () => console.warn('onDecrement is not defined'),
  onSetColor: () => console.warn('onSetColor is not defined'),
}

export default Counter