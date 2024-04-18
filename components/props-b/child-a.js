import React from 'react'

export default function ChildA(props) {
  return (
    <>
      <h3>ChildA(子女A)</h3>
      <p>來自ChildB(子女B)的資料: {props.dataFromChild}</p>
    </>
  )
}
