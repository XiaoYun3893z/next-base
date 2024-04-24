import { useRef } from 'react'

export default function InputRefs() {
  // 1. 初始值為`null`，要對應表單元素的API，如`getElementById`獲取元素參照時，沒得到時會回傳`null`
  const inputRef = useRef(null)

  return (
    <>
      <h2>input使用refs</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          alert(inputRef.current.value)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
