import React from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

export default class UserProfile extends React.Component {

  // DO I ACTUALLY NEED THE PROPS HERE?
  constructor() {

  }



  render () {
    return (
      <h1>Create Profile</h1>
      <button>Import LinkedIn Profile</button>
      <button>Manually Create Profile</button>
      <small>Maybe </small>
      <form>
        <div>
          <label htmlFor="education">

          </label>
        </div>

      // first name
      // last name
      // Industry
      // Primary Industry
      // Secondary Industry
      // Skills
      <div className="form-row">
        <label htmlFor="skils"><small>Enter Skills</small></label>
      </div>
      <button className="button">Submit</button>
      </div>
    </form>



    //   <div>
    //   <h1>Applications will go here</h1>
    //   <textarea rows="4"/>
    //   </div>
    // )
  }

}
