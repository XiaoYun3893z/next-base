import React from 'react'

export default function ChildA(props) {
  return (
    <>
      <h3>ChildA(子女A)</h3>
      <p>來自Parent(父母)的資料: {props.pData}</p>
    </>
  )
}
