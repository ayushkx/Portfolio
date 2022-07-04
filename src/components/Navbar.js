import React from 'react'
// import PropTypes from 'prop-types'


 export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light " style={{backgroundColor: '#ebf1fd'}}>
    <div className="container-fluid">
    <a className="navbar-brand" href = "/" ><b>{props.name}</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href = "#home" style={{color: '#ff0033'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href = "#about"  style={{color: '#ff0033'}}>{props.about} </a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
)
}

// Navbar.propTypes = {
//     name: PropTypes.string,
//     about : PropTypes.string
//   };

// Navbar.defaultProps = {
//     name : "your title here" ,
//     about : "About here"
// };
