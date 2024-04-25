import { useRef } from 'react'

export default function InputRefs() {
  // 1. 如果是會用在DOM元素上，會使用初始值為`null`
  // 要對應API如`getElementById`獲取元素物件參照時沒得到時會回傳`null`
  // 下面執行後 inputRef 會是一個物件 { current: null }
  const inputRef = useRef(null)

  return (
    <>
      <h2>input使用refs</h2>
      {/* 2. 用類似屬性指定值的方式套用到要對應的DOM元素上 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 3. 使用時使用inputRef.current
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
          document.getElementById('my-input').blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
