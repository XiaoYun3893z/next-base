import { useState } from 'react'

export default function ChildB(props) {
  // 子女元件狀態(內部私有)
  const [cData, setCData] = useState('child b data')
  // 錯誤寫法:不可以直接寫在元件函式的主體
  // 原因是setDataFromChild是setState，會造成re-render(重新渲染)
  // 對react元件來說具有副作用，需要在事件處理函式或useEffect中呼叫
  // props.setDataFromChild(cData)

  return (
    <>
      <h3>ChildB(子女B)</h3>
      <button
        onClick={() => {
          // 方式1: 利用事件處理函式執行
          props.setDataFromChild(cData)
        }}
      >
        送內部私有資料給ChildA(子女A)
        {/* C->C */}
      </button>
    </>
  )
}
