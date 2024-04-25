import { useState, useRef } from 'react'
import InputIME from '@/components/refs-demo/input-ime'

export default function RefsForward() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)

  return (
    <>
      <h1>Refs的forward使用展示</h1>
      <hr />
      <h2>一般的input-text</h2>
      <input
        type="text"
        ref={inputRef1}
        value={input1}
        onChange={(e) => {
          setInput1(e.target.value)
        }}
      />
      <button
        onClick={() => {
          inputRef1.current.focus()
        }}
      >
        聚焦
      </button>
      <h2>InputIME元件</h2>
      <InputIME
        ref={inputRef2}
        value={input2}
        onChange={(e) => {
          setInput2(e.target.value)
        }}
      />
      <button
        onClick={() => {
          inputRef2.current.focus()
        }}
      >
        聚焦
      </button>
    </>
  )
}
