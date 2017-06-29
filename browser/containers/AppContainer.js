import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import Navbar from '../components/Navbar';
// import AllProducts from '../components/AllProducts';
import {connect} from 'react-redux';
import { logoutUser, receiveProducts} from '../action-creators'


class AppContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
   };
  }

  render () {
    // console.log('this', this);
    // // console.log('props', props);
    // console.log('this.props', this.props);
    // console.log('children', this.props.children)
    return (
      <div id="entire-container">
      <div className="fullscreen-bg">
      </div>
        <Navbar />
        <div className="col-xs-12">
          { this.props.children }
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {}
}

export default connect(mapStateToProps)(AppContainer)
