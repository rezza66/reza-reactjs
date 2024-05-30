import React, { Component } from 'react'
import ViewMyWorkBtn from './ViewMyWorkBtn';
import HeaderImg from '../assets/images/reza_updated.jpg';

export default class Header extends Component {
  render() {
    return (
      <header className='mb-5' id='header'>
        <div className="container py-lg-5 mt-3">
            <div className="row mt-5">
                <div className="col-md-6 dflex flex-column align-items-start justify-content-center mt-5 mt-md-0">
                    <h3 className='text-start text-secondary fw-bold lh-1'>Reza Pratama</h3>
                    <h1 className=" text-start text-primary lh-1 mb-5">Front end <br /> web developer</h1>
                    <div className="text-start">
                      <ViewMyWorkBtn />
                    </div>
                </div>
                <div className="col-md-6 dflex justify-content-end mb-5 py-3">
                    <img className='img-fluid w-75 rounded-circle shadow' src={HeaderImg} alt="header-img" />
                </div>
            </div>
        </div>
      </header>
    )
  }
}
