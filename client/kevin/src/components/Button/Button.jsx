import React from 'react'

function Button(props) {
  return (
    <button className="btn rounded-2xl" type={props.type}>
        {props.text}
    </button>
  )
}

export default Button