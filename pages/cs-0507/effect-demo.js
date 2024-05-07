import { useState } from 'react'

export default function EffectDemo() {
  // 與畫面呈現有關的狀態
  const [name, setName] = useState('Nike')
  // 用來強制重新渲染的狀態，實際上是一個不斷變動的值，但與畫面呈現無關
  const [force, setForce] = useState(false)

  return (
    <>
      <h1>Effect說明範例</h1>
      <p>{name}</p>
      <button
        onClick={() => {
          setName('Iris')
        }}
      >
        改為Iris
      </button>
      <button
        onClick={() => {
          setName('Nike')
        }}
      >
        改為Nike
      </button>
      <button
        onClick={() => {
          setForce(!force)
        }}
      >
        反相force
      </button>
    </>
  )
}
