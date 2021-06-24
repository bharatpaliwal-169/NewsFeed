import React from 'react'
import {Typography} from '@material-ui/core'
function Footer(props) {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          <div className="col-12 text-center mt-5 mb-4">
            <Typography variant='h5' className='text-muted'>&copy; Bharat Paliwal</Typography>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;
