import React from 'react';
import { Link } from 'react-router'

export default function Navbar(props) {
	return (
		<div>
			<div className='row'>
		      <nav className="navbar navbar-default" id="nav">
		        <div className="container-fluid">
		          </div>

		          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		            <ul className="nav navbar-nav">
		              <li className="dropdown">
		                <a href="#" className="dropdown-toggle nav-region" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="nav-region">Maybe this will be something <span className="caret"></span></a>
		                <ul id="nav-dropdown" className="dropdown-menu">
		                </ul>
		              </li>
		              	<li>
		               		<Link to='/home'>
		                    <p className="yellow">Home</p>
		                    </Link>
		                </li>
		              	<li>
		               		<Link to='/login'>
		                    <p className="yellow">Login</p>
		                    </Link>
		                </li>
		            </ul>
		            <ul className="nav navbar-nav navbar-right">
		              <li>
		                <form className="navbar-form" id="search" >
		                  <div className="form-group">
		                    <input id="search-input" type="text" className="form-control" placeholder="Search Jobs"/>
		                  </div>

		                  <button id="search-btn" type="submit" className="btn btn-default">Search</button>
		                </form>
		              </li>
		            </ul>
		          </div>
		      </nav>
			</div>
		</div>
		)
}