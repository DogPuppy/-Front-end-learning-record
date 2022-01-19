import React, { Component } from 'react'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
  ref = React.createRef()
  increment=()=>{
    const value=this.ref.current.value
    this.props.store.dispatch(createIncrementAction(+value))
  }
  decrement=()=>{
    const value=this.ref.current.value
    this.props.store.dispatch(createDecrementAction(+value))
  }
  incrementIfOdd=()=>{
    const value=this.ref.current.value
    const count=this.props.store.getState()
    if(count%2!==0){
      this.props.store.dispatch(createIncrementAction(+value))
    }
  }
  incrementAsync=()=>{
    const value=this.ref.current.value
    setTimeout(()=>{
      this.props.store.dispatch(createIncrementAction(+value))
    },1000)
      
    
  }
  render() {
    const count=this.props.store.getState()
    return (
      <div>
        <h2>求和为{count}</h2>
        <select ref={this.ref} name='value'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
