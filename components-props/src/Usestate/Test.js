import React from 'react'

const Test = (props) => {
  return (
    <>
        <div>{props.name}</div>
        <div>{props.age}</div>
        <div>{props.job}</div>
    </>
  )
}

export default Test