/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
*/

import * as types from './ActionTypes'

export const increment = () => ({
  type: types.INCREMENT
})

export const decrement = () => ({
  type: types.DECREMENT
})

// 파라미터를 갖는 액션 생성자
export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
})