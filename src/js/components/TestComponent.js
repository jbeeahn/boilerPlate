import React, { Component } from "react"
import { connect } from "react-redux"
import { AppActions } from "../actions"

const mapStateToProps = state => ({
  ...state.appReducer
})

const mapActionToProps = {
  ...AppActions
}

@connect(
  mapStateToProps,
  mapActionToProps
)
export default class TestComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { testAction } = this.props
    console.log(this.props)
    testAction()
  }

  render() {
    const { isDummy } = this.props
    console.log(isDummy)
    const text = isDummy ? "Fetched Dummy" : "Just Dummy"
    return <div>{text}</div>
  }
}
