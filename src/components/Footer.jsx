import React from 'react'
import {Link} from 'react-router-dom';
function Footer(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row bg-dark text-white">
          <div className="col-6">
            <h6>Liked the Feed!!</h6>
            <p>Appriciate the developer by giving Star <span> <Link to=''></Link> </span></p>
          </div>
          <div className="col-12 text-center">
            <p className='text-muted'>&copy; Bharat Paliwal</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
