import React from 'react'
import './MyTextarea.scss'
function MyTextarea({isActive,value,onChange,...props}) {
  return (
    <textarea onChange={onChange} className={isActive ? "my-textarea" : "my-textarea active"} {...props}>{value}</textarea>
  )
}

export default MyTextarea