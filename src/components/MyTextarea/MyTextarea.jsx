import React from 'react'
import './MyTextarea.scss'
function MyTextarea({isActive,value,onChange,...props}) {
  return (
    <textarea onChange={onChange} className={isActive ? "my-textarea active" : "my-textarea "} {...props}>{value}</textarea>
  )
}

export default MyTextarea