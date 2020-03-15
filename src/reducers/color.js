import * as types from '../actions/ActionTypes'


// 리듀서 함수 정의, 리듀서는 state 와 action을 파라미터로 받음
// sate가 undefined (스토어가 생성될 때) state 의 기본값을 initialState로
// action.type 에 따라 다른 작업을 하고 새 상태를 만들어 반환

const initialState = {
  color: 'black'
}

const color = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_COLOR:
      return {
        color: action.color
      }
    default:
      return state
  }
}

export default color