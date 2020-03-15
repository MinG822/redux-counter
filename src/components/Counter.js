import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div
      className="Counter"
      // 무한 렌더링을 피하기 위해 인자가 들어가면 함수 리턴값으로
      onClick={() => onIncrement(index)}
      // 우클릭시 메뉴가 열리는 이벤트
      onContextMenu={
        (e) => {
          // 메뉴가 열리지 않음
          e.preventDefault()
          onDecrement(index)
        }
      }
      // onClick 이벤트와 겹치지 않으려면..?
      onDoubleClick={() => onSetColor(index)}
      style={{backgroundColor: color}}>
        {number}
      </div>
  )
}

//propTypes 와 PropTypes 헷갈리지 않기
Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement is not defined'),
  onDecrement: () => console.warn('onDecrement is not defined'),
  onSetColor: () => console.warn('onSetColor is not defined'),
}

export default Counter