import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className='bg-primary text-light py-4 '>
            <div className="container">
                <p className=" d-flex align-items-center justify-content-center m-0">
                    &copy; 2024 create with love
                </p>
            </div>
        </footer>
    )
  }
}
