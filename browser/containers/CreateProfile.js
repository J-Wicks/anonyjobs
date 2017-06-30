import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import { hashHistory } from 'react-router';
import { addExperience } from '../reducers/experience';
import { addEducation } from '../reducers/education';


class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addSkillsClicked: false,
      addEducationClicked: false,
      addExperienceClicked: false,
      addSummaryClicked: false,
      skillsObj: {},
      indiviudalSkillsClicked: []
    }
    this.handleSkillsClick = this.handleSkillsClick.bind(this);
    this.renderSkillsCategories = this.renderSkillsCategories.bind(this);
    // this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleEducationClick = this.handleEducationClick.bind(this);
    this.toggleSkillsClick = this.toggleSkillsClick.bind(this);
    this.toggleEducationClick = this.toggleEducationClick.bind(this);
    this.renderEducationInputs = this.renderEducationInputs.bind(this);
    this.renderExperienceInputs = this.renderExperienceInputs.bind(this);
    this.renderSummaryInputs = this.renderSummaryInputs.bind(this);
    this.toggleExperienceClick = this.toggleExperienceClick.bind(this);
    this.toggleSummaryClick = this.toggleSummaryClick.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    // this.handleSkillsSubmit = this.handleSkillsSubmit.bind(this)

  }


  toggleSkillsClick () {

    if (this.state.addSkillsClicked === false) {
      this.setState({addSkillsClicked: true});
    } else if (this.state.addSkillsClicked === true) {
      this.setState({addSkillsClicked: false});
    }
    console.log('state of addSkillsClicked', this.state.addSkillsClicked)
  }

  toggleEducationClick () {
    if (this.state.addEducationClicked === false) {
      this.setState({addEducationClicked: true});
    } else if (this.state.addEducationClicked === true) {
      this.setState({addEducationClicked: false});
    }
  }


  handleSkillsClick () {
    if (!Object.keys(this.state.skillsObj).length) {
      let skillsArr = this.props.skills;
      let skillsObj = {}
      skillsArr.forEach(function(skillInstance){
        let currentCategory = skillInstance.category
        if (!skillsObj[currentCategory]) {
          skillsObj[currentCategory] = []
        } else {
          skillsObj[currentCategory].push(skillInstance.name)
        }
      })
      let categories = Object.keys(skillsObj);
      this.setState({skillsObj: skillsObj})
    }
    this.toggleSkillsClick();

  }

  renderSkillsCategories(){
    let skills = Object.keys(this.state.skillsObj)
    return skills.map(function(skill, index){
      // return (
      //   <button key={index} onClick={this.handleCategoryClick(skill)}>{skill}</button>
      // )
      return (
        <button key={index}>{skill}</button>
      )
    })
  }


  handleEducationClick() {
    this.toggleEducationClick()

  }


  renderEducationInputs(){
    return (
        <form className="addEducation">
          <div>
            <label htmlFor="addSchool">Add School</label>
            <input name="addSchool" defaultValue="Enter School Here"/>
          </div>
          <div>
            <label htmlFor="addYear">Add Graduation Year</label>
            <input name="addYear" defaultValue="YYYY"/>
          </div>
          <div>
            <label htmlFor="addDegree">Add Degree</label>
            <select name="addDegree">
              <option>Bachelor of Arts</option>
              <option>Bachelor of Science</option>
              <option>Associates</option>
              <option>Masters</option>
              <option>MBA</option>
              <option>JD</option>
              <option>PhD</option>
            </select>
          </div>
          <div>
            <label htmlFor="degreeName">Degree Name</label>
            <input name="degreeName" defaultValue="Add Degree Name Here" />
          </div>
          <div>
            <label htmlFor="GPA">GPA</label>
            <input name="GPA " defaultValue="Add GPA Here" />
          </div>
        </form>
    )
  }

    toggleExperienceClick(){

      if (this.state.addExperienceClicked === false) {
      		this.setState({addExperienceClicked: true});
      } else if (this.state.addExperienceClicked === true) {
      	this.setState({addExperienceClicked: false});
      }
    }

    renderExperienceInputs() {
      return (
          <form className="addExperience">
            <div>
              <label htmlFor="addEmployer">Employe Namer</label>
              <input name="addEmployer" defaultValue="Enter Employer Name Here"/>
            </div>
            <div>
              <label htmlFor="addRole">Job Title </label>
              <input name="addRole" defaultValue="YYYY"/>
            </div>
            <div>
              <label htmlFor="startYear">Stary Year</label>
              <input name="startYear" defaultValue="YYYY"/>
            </div>
            <div>
              <label htmlFor="endYear">End Year</label>
              <input name="endYear" defaultValue="YYYY"/>
            </div>
            <div>
              <textarea type="text" defaultValue="Describe your roles and responsibilities here."/>
            </div>
            <button onClick={this.handleExperienceSubmit} type="">Save</button>
          </form>
      )
    }

    handleExperienceSubmit(event){
      event.preventDefault();
      let companyName = event.target.addEmployer.value;
      let role = event.target.addRole.value;
      let startYear = event.target.startYear.value;
      let endYear = event.target.endYear.value;

      let experienceObj = {companyName, role, startYear, endYear}
      // let userId = this.props.currentUser.id
      dispatch(addExperience(experience, userId))
    }

    toggleSummaryClick(){
      if (this.state.addSummaryClicked === false) {
    		this.setState({addSummaryClicked: true});
    	} else if (this.state.addSummaryClicked === true) {
    		this.setState({addSummaryClicked: false});
      }
    }

    renderSummaryInputs(){

      return (
        <textarea type="text" defaultValue="Describe your experience, background, and professional objectives."/>
      )

    }


  // toggleEducationClick () {
  // 	if (this.state.addEducationClicked === false) {
  // 		this.setState({addEducationClicked: true});
  // 	} else if (this.state.addEducationClicked === true) {
  // 		this.setState({addEducationClicked: false});
  // 	}
  // }

  // this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
  // this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
  // this.handleSkillsSubmit = this.handleSkillsSubmit.bind(this)


  handleEducationSubmit(event){
    event.preventDefault();

  }

  render() {
    return (
      <div className="profileClass">
        <button>(Possibly) Import LinkedIn Profile</button>
        <button>Manually Create Profile</button>
        <div>
          <button onClick={this.handleEducationClick}>Add Education</button>
        </div>
          {(this.state.addEducationClicked) ? (<div>{this.renderEducationInputs()}</div>) : null }
        <div>
          <button onClick={this.handleSkillsClick}>Add Skills</button>
        </div>
        {(this.state.addSkillsClicked) ? (<div><h3>Categories</h3>{this.renderSkillsCategories()}</div>) : null }
        <div>
          <button onClick={this.toggleExperienceClick}>Add Professional Experience</button>
        </div>
        {(this.state.addExperienceClicked) ? (<div>{this.renderExperienceInputs()}</div>) : null }
        <div>
          <button onClick={this.toggleSummaryClick}>Add Personal Summary</button>
        </div>
        {(this.state.addSummaryClicked) ? (<div>{this.renderSummaryInputs()}</div>) : null }

      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return ({
    updateExperience: (experience, userId) => dispatch(addExperience(experience, userId)),
    updateEducation: (education, userId) => dispatch(addEducation(education, userId)),
  })
}


const mapStateToProps = state => {
  return ({
    skills: state.skillsReducer.allSkills
    // ,
    // currentUser: state.userReducer.loggedInUser
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile)
