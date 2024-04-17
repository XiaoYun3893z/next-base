import React from 'react'

export default function JsxMap() {
  const aa = [1, 4, 9, 16]

  //   const ab = aa.map((v, i) => {
  //     return <li key={i}>{v}</li>
  //   })

  // ab相當於
  //   [<li key={0}>1</li>,
  //   <li key={1}>4</li>,
  //   <li key={2}>9</li>,
  //   <li key={3}>16</li>]

  return (
    <>
      <h1>JSX語法: 陣列map範例</h1>
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v * 2}</li>
        })}
      </ul>
    </>
  )
}
