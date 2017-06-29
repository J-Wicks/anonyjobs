import React from 'react';
import {connect} from 'react-redux'

class CreateProfile extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    alert('aksfhajkhsf')
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }

}

export default connect()(CreateProfile)
