import { useState } from 'react'

export default function AsyncA() {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)

  const handleStateChange = (value) => {
    // 錯誤寫法
    // state2並非使用更動完成的state1來運算，會慢一拍
    // setState1(state1 + value)
    // setState2(state1 * 2)

    // 正確寫法
    // 先計算下個state1是什麼值，需要下個時間點的state1都用nextState1
    const nextState1 = state1 + value
    setState1(nextState1)
    setState2(nextState1 * 2)
  }

  return (
    <>
      <h1>setState異步說明範例-A</h1>
      <hr />
      <p>state1={state1}</p>
      <h2>state2 = state1 * 2</h2>
      <p>state2={state2}</p>
      <button
        onClick={() => {
          handleStateChange(2)
        }}
      >
        state1+2
      </button>
      <button
        onClick={() => {
          handleStateChange(5)
        }}
      >
        state1+5
      </button>
    </>
  )
}
