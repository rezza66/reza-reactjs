import React, { Component } from 'react'

export default class AboutSection extends Component {
  render() {
    return (
        <div className="bg-dark text-light py-5" id='about'>
            <div className="container">
                <div className="row text-center mb-3">
                    <div className="col">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="row justify-content-center fs-5 text-center">
                    <div className="col-md-6">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam sapiente beatae aut quibusdam quidem dignissimos autem quod iusto consectetur placeat cupiditate iste nam unde fuga distinctio ipsam laudantium magnam voluptatum voluptate, neque, quae laboriosam!</p>
                    </div>
                    <div className="col-md-6">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi unde asperiores voluptatum saepe necessitatibus minima provident accusamus libero, praesentium facere dolor ut similique eligendi temporibus exercitationem molestiae. Blanditiis, cum eum!</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
