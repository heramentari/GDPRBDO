import React from 'react'

const Newsletter = props => (
  <div className="newsletter">
    <h4>Save submitted answers of this checklist</h4>
    	<input type="button" value="Print Checklist Result" className="submit-button" onClick={window.print} />
  </div>
)

export default Newsletter