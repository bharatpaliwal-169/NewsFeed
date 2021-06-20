import React from 'react'
function Footer(props) {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          {/* <div className="col-6 mt-5 text-center">
            <h6>Liked the Feed!!</h6>
          </div>
          <div className="col-6 mt-5 text-center">
            <h6>Developer's Profile :</h6>
            <p>
            </p>
          </div> */}
          <div className="col-12 text-center">
            <p className='text-muted'>&copy; Bharat Paliwal</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;
