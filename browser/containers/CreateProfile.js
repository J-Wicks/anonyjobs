import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';
import { hashHistory } from 'react-router';
import { addExperience } from '../reducers/user';
import { addEducation } from '../reducers/user';
import { addSummary } from '../reducers/user';
import { addSkills } from '../reducers/user';
import _ from 'lodash';

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
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
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
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSummarySubmit = this.handleSummarySubmit.bind(this)
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.renderCheckboxes = this.renderCheckboxes.bind(this);
    this.createSkillsTickedObj = this.createSkillsTickedObj.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.handleSkillsSave = this.handleSkillsSave.bind(this);
}

toggleSkillsClick () {

  if (this.state.addSkillsClicked === false) {
    this.setState({addSkillsClicked: true});
  } else if (this.state.addSkillsClicked === true) {
    this.setState({addSkillsClicked: false});
  }
}

toggleEducationClick () {
  if (this.state.addEducationClicked === false) {
    this.setState({addEducationClicked: true});
  } else if (this.state.addEducationClicked === true) {
    this.setState({addEducationClicked: false});
  }
}

toggleExperienceClick(){

  if (this.state.addExperienceClicked === false) {
    this.setState({addExperienceClicked: true});
  } else if (this.state.addExperienceClicked === true) {
    this.setState({addExperienceClicked: false});
  }
}

toggleSummaryClick(){
  if (this.state.addSummaryClicked === false) {
    this.setState({addSummaryClicked: true});
  } else if (this.state.addSummaryClicked === true) {
    this.setState({addSummaryClicked: false});
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
  this.createSkillsTickedObj()
}

handleCategoryClick(event){
  console.log('handle Category click')
  let skill = event.target.value;
  let skillString = `${skill}Clicked`
  if (this.state[skillString] === undefined) {
    this.setState({[skillString]: true})
  } else if (this.state[skillString] === true) {
    this.setState({[skillString]: false})
  } else if (this.state[skillString] === false) {
    this.setState({[skillString]: true})
  }
}

createSkillsTickedObj(){
  let skillsArr = this.props.skills;
  let skillsTickedObj = {}
  skillsArr.forEach(function(skillInstance){
    let currentCategory = skillInstance.category
    if (!skillsTickedObj[currentCategory]) {
      skillsTickedObj[currentCategory] = {}
    } else {
      skillsTickedObj[currentCategory][skillInstance.name] = false
    }
  })
  this.setState({skillsTickedObj})
  console.log(this.state)
}

handleTick(event) {
  let subSkill = event.target.name;
  let category = event.target.id;
  let currentSkillsObj = Object.assign({},this.state.skillsTickedObj);
  if (currentSkillsObj[category][subSkill] === false) {
    currentSkillsObj[category][subSkill] = true
  } else if (currentSkillsObj[category][subSkill] === true){
    currentSkillsObj[category][subSkill] = false
  }
  this.setState({skillsTickedObj: currentSkillsObj})
}

handleCategoryClick(event){
console.log('handle Category click')
  let skill = event.target.value;
  let skillString = `${skill}Clicked`
  if (this.state[skillString] === undefined) {
    this.setState({[skillString]: true})
  } else if (this.state[skillString] === true) {
    this.setState({[skillString]: false})
  } else if (this.state[skillString] === false) {
    this.setState({[skillString]: true})
  }
}

createSkillsTickedObj(){
  let skillsArr = this.props.skills;
  let skillsTickedObj = {}
  skillsArr.forEach(function(skillInstance){
    let currentCategory = skillInstance.category
    if (!skillsTickedObj[currentCategory]) {
      skillsTickedObj[currentCategory] = {}
    } else {
      skillsTickedObj[currentCategory][skillInstance.name] = false
    }
  })
  this.setState({skillsTickedObj})
  console.log(this.state)
}

handleTick(event) {
  let subSkill = event.target.name;
  let category = event.target.id;
  let currentSkillsObj = Object.assign({},this.state.skillsTickedObj);
  if (currentSkillsObj[category][subSkill] === false) {
    currentSkillsObj[category][subSkill] = true
  } else if (currentSkillsObj[category][subSkill] === true){
    currentSkillsObj[category][subSkill] = false
  }
  this.setState({skillsTickedObj: currentSkillsObj})
}

renderCheckboxes(skill) {
  console.log('rendering checkboxes...')
  let subCategories = this.state.skillsObj[skill];
  let categoryBoxes = subCategories.map((subSkill, index) => {
  return (
    <div key={index}>
      <label>
      {subSkill} :
      <input
        name={`${subSkill}`}
        type="checkbox"
        onChange={this.handleTick}
        id={skill}/>
      </label>
    </div>
  )
  })
  return categoryBoxes
}


renderSkillsCategories(){
  let skills = Object.keys(this.state.skillsObj)
  return skills.map((skill, index) => {
    let skillString = `${skill}Clicked`
  return (
    <div  key={index}>
      <button value={skill} onClick={this.handleCategoryClick}>{skill}</button>
        {(this.state[skillString]) ? (
      <div>
        {this.renderCheckboxes(skill)}
      <button onClick={this.handleSkillsSave(skill)}>Save</button>
    </div>
    )
    : null }
    </div>
  )
  })
}

renderSummaryInputs(){
  return (
  <form>
    <textarea type="text" defaultValue="Describe your experience, background, and professional objectives." onChange={this.handleInputChange} name="summary"/>
    <button onClick={this.handleSummarySubmit} type="">Save</button>
  </form>
  )
}


renderEducationInputs(){
  return (
    <form className="educationUpdate">
      <div>
        <label htmlFor="schoolName">Add School</label>
        <input name="schoolName" defaultValue="Enter School Here" type="text" onChange={this.handleInputChange}/>
      </div>
      <div>
        <label htmlFor="yearGraduated">Add Graduation Year</label>
        <input name="yearGraduated" defaultValue="YYYY" type="text" onChange={this.handleInputChange}/>
      </div>
      <div>
        <label htmlFor="degree" type="text" >Add Degree</label>
        <select name="degree" onChange={this.handleInputChange}>
        <option value="Bachelor of Arts">Bachelor of Arts</option>
        <option value="Bachelor of Science">Bachelor of Science</option>
        <option value="Associates">Associates</option>
        <option value="Masters">Masters</option>
        <option value="MBA">MBA</option>
        <option value="JD">JD</option>
        <option value="PhD">PhD</option>
        </select>
      </div>
      <div>
        <label htmlFor="degreeName">Degree Name</label>
        <input name="degreeName" defaultValue="Add Degree Name Here" onChange={this.handleInputChange} />
      </div>
      <div>
        <label htmlFor="finalGPA">GPA</label>
        <input name="finalGPA " defaultValue="Add GPA Here" onChange={this.handleInputChange}/>
      </div>
    <button onClick={this.handleEducationSubmit} >Save</button>
    </form>
  )
}


renderExperienceInputs() {
return (
  <form className="addExperience">
    <div>
      <label htmlFor="companyName">Employe Namer</label>
      <input type="text" name="companyName" defaultValue="Enter Employer Name Here" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="role">Job Title </label>
      <input type="text" name="role" defaultValue="YYYY" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="startYear">Start Year</label>
      <input type="text" name="startYear" defaultValue="YYYY" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="endYear">End Year</label>
      <input type="text" name="endYear" defaultValue="YYYY" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="responsibilities">End Year</label>
      <textarea name="responsibilities" type="text" defaultValue="Describe your roles and responsibilities here." onChange={this.handleInputChange} />
    </div>
    <button onClick={this.handleExperienceSubmit} type="">Save</button>
  </form>
  )
}

handleExperienceSubmit(event){
  event.preventDefault();
  let companyName = this.state.companyName;
  let role = this.state.role;
  let startYear = this.state.startYear;
  let endYear = this.state.endYear;
  let experienceObj = {companyName, role, startYear, endYear}
  this.props.updateExperience(experienceObj, this.props.currentUser.id)
}

handleEducationSubmit(event){
  event.preventDefault();
  let schoolName = this.state.schoolName;
  let yearGraduated = this.state.yearGraduated;
  let degree = this.state.degree;
  let degreeName = this.state.degreeName;
  let finalGPA = this.state.finalGPA;
  let educationObj = {
  schoolName: schoolName,
  yearGraduated: yearGraduated,
  degree: degree,
  degreeName: degreeName,
  finalGPA: finalGPA}
  let userId = this.props.currentUser.id;
  this.props.updateEducation(educationObj, this.props.currentUser.id)
}

handleSummarySubmit(event) {
  event.preventDefault();
  let summary = this.state.summary;
  let userId = this.props.currentUser.id;
  this.props.updateSummary(summary, this.props.currentUser.id);
}

handleSkillsSave(category){
  return () =>  {
    let skillsToDB = []
    let subSkillObj = this.state.skillsTickedObj[category];
    let skillsToCheck = Object.keys(subSkillObj);
    skillsToCheck.forEach(subSkill => {
      let skillObj = {}
    if (subSkillObj[subSkill]) {
      skillObj['category'] = category;
      skillObj['name'] = subSkill;
      skillsToDB.push(skillObj)
    }
  })
this.props.updateSkills(skillsToDB, this.props.currentUser.id)
}

}

handleInputChange(event) {
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const target = event.target;
  const name = target.name;
  this.setState({
    [name]: value})
}

render() {
  return (
    <div className="profileClass">
      <button>(Possibly) Import LinkedIn Profile</button>
      <button>Manually Create Profile</button>
    <div>
      <button onClick={this.toggleEducationClick}>Add Education</button>
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
    {(!this.props.currentUser.summary) ? (    <div>
      <button onClick={this.toggleSummaryClick}>Add Personal Summary</button>
    </div>) : null }
    {(this.state.addSummaryClicked) ? (<div>{this.renderSummaryInputs()}</div>) : null }
    <div>
      <Link to="viewProfile"><h2>View Profile</h2></Link>
      <Link to={`userdashboard/${this.props.currentUser.id}`}><h2>View Dashboard</h2></Link>
    </div>
    </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return ({
    updateExperience: (experience, userId) => dispatch(addExperience(experience, userId)),
    updateEducation: (education, userId) => dispatch(addEducation(education, userId)),
    updateSummary: (summary, userId) => dispatch(addSummary(summary, userId)),
    updateSkills: (skills, userId) => {
    dispatch(addSkills(skills, userId))
    }
  })
}

const mapStateToProps = state => {
  return ({
    skills: state.skillsReducer.allSkills,
    currentUser: state.userReducer.currentUser
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile)
