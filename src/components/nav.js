import React, { Component } from 'react';
import './css/nav.css';



class Nav extends Component {
  render() {
    return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded navWrapper">  
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded col-lg-8 offset-lg-2">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" > 
                <i className="fa fa-home" aria-hidden="true"> Home </i> 
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" > 
                            <i className="fa fa-book" aria-hidden="true"> Bookmark </i> 
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item active" >
                        <a className="nav-link" >
                            <i className="fa fa-cog" aria-hidden="true"> Settings </i> 
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </nav>
    );
  }
}

export default Nav;
