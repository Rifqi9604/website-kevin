import React from 'react'

function Button(props) {
  return (
    <div>
        <a className="btn rounded-2xl">{props.text}</a>
    </div>
  )
}

export default Button