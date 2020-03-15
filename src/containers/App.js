import React, { Component } from 'react'
import Buttons from '../components/Buttons'
import CounterContainer from '../containers/CounterListContainer'

import { connect } from 'react-redux'
import * as actions from '../actions'

import { getRandomColor } from '../utils'

class App extends Component {
  render () {
    //props를 어디서 받아옴?? index.js에서 넘겨주는 prop이없는데?
    // App에서 onCreate, onRemove 액션을 발생시켰기 때문에 props로 가지고 있을 수 있는데,
    // mapToDisPatch 부분을 주석처리한뒤 this.props를 로그찍으면 props가 존재하지 않음을 알 수 있다.
    const { onCreate, onRemove } = this.props
    return (
      <div className="App">
        <Buttons
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterContainer/>
      </div>
    )
  }
}

const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: (index) => dispatch(actions.remove(index)) 
})

// 파일 하나에서 컴포넌트를 정의하고 바로 연결해 주었다.
// store에서 필요한 값이 없어서 mapStateToProps는 null로 설정
export default connect(null, mapToDispatch)(App)
