import React, { Component } from 'react'

export default class LyfeCicleDemoChild extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      mensaje: 'Mensaje Inicial'
    }
    this.changeState = this.changeState.bind(this)
    console.log('<LifeCycleDemo> constructor')
  }

  componentWillMount () {
    console.log('<LifeCycleDemo> componentWillMount')
  }

  componentDidMount () {
    console.log('<LifeCycleDemo> componentDidMount')
    this.interval = setInterval(() => {
      console.log('Go!')
    }, 1000)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('<LifeCycleDemo> shouldComponentUpdate')
    console.log('Props actuales: ', JSON.stringify(this.props))
    console.log('Props proximas: ', JSON.stringify(nextProps))
    return (this.props.sizeMessage !== nextProps.sizeMessage) || (this.state.mensaje !== nextState.mensaje)
  }

  componentWillReceiveProps (nextProps) {
    console.log('<LifeCycleDemo> componentWillReceiveProps', nextProps)
  }

  componentWillUpdate () {
    console.log('<LifeCycleDemo> componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('<LifeCycleDemo> componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('<LifeCycleDemo> componentWillUnmount')
    clearInterval(this.interval)
  }

  changeState () {
    this.setState({mensaje: 'Mensaje Actualizado!'})
  }
  render () {
    console.log('<LifeCycleDemo> render')
    return (
      <div className="lyfecicledemo">
        <p><strong>Props: </strong>{ JSON.stringify(this.props) }</p>
        <p><strong>State: </strong>{ JSON.stringify(this.state) }</p>
        <button onClick={() => this.changeState() }>Change State!</button>
      </div>
    )
  }
}
