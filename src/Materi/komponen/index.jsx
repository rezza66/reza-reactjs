import React, { Component } from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

export default class Komponen extends Component {
  render() {
    return (
      <div>
        <ClassComponent />
        <br/>
        <hr/>
        <FunctionalComponent />
      </div>
    )
  }
}
