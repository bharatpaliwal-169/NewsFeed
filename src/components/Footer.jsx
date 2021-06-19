import React from 'react'
import {Link} from 'react-router-dom';
function Footer(props) {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          <div className="col-6 mt-5 text-center">
            <h6>Liked the Feed!!</h6>
            <p>Appriciate the developer by giving Star <span> <Link rel="noopener" to='https://github.com/bharatpaliwal-169/NewsFeed' target='_blank'>Here</Link> </span></p>
          </div>
          <div className="col-6 mt-5 text-center">
            <h6>Developer's Profile :</h6>
            <p>
              <Link to="https://github.com/bharatpaliwal-169/" target="_blank" rel="noopener">Here</Link>
            </p>
          </div>
          <div className="col-12 text-center">
            <p className='text-muted'>&copy; Bharat Paliwal</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;
