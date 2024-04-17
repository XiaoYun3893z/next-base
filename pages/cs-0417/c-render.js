import { useState } from 'react'

export default function CRender() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>JSX條件式渲染(conditional render)</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <hr />
      {/* if表達式語法(&&運算子)。因為使用的是falsy判斷，造成不精確，0或是NaN一樣會呈現 */}
      {total && <p>目前total是{total}</p>}
      {/* 強制把判斷式轉為布林 */}
      {Boolean(total) && <p>目前total是{total}</p>}
      {!!total && <p>目前total是{total}</p>}
      {/* 判斷式使用比較運算 */}
      {total > 0 && <p>目前total是{total}</p>}
      {total !== 0 && <p>目前total是{total}</p>}
      {/* 改用三元運算子取代 */}
      {total ? <p>目前total是{total}</p> : ''}
    </>
  )
}