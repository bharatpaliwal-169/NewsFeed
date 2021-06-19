import React from 'react'
import {Spinner} from 'react-bootstrap'

export default function Loading() {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-12 text-center mt-5">
            <h1> Wait Feed is getting ready for you...</h1>
            <Spinner animation="border" variant="info" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
