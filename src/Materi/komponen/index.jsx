import React, { Component } from 'react'
import ClassComponent from './pembahasan/ClassComponent'
import FunctionalComponent from './pembahasan/FunctionalComponent'

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
