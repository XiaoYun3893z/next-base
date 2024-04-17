import React from 'react'

export default function JsxRender() {
  return (
    <>
      <h1>JSX各種值render(渲染)</h1>
      <h2>number(數字)</h2>
      {123}
      {1 - 1}
      {NaN}
      <hr />
      <h2>string(字串)</h2>
      {'abc'}
      {'   '}
      hello
      {`price=${100 - 1}`}
      <hr />
      <h2>boolean(布林)</h2>
      {/* 布林值不渲染呈現 */}
      {true}
      {false}
      <hr />
      <h2>null/undefined</h2>
      {/* 不渲染呈現 */}
      {null}
      {undefined}
      <hr />
      <h2>array(陣列)</h2>
      {/* 類似array.join('') */}
      {[1, 2, 3]}
      {['hello', 'a', 'b']}
      <hr />
      <h2>object(物件)</h2>
      {/* 不能直接渲染，執行期中斷錯誤，並非React Child */}
      {/* https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {{ a: 1, b: 2 }} */}
      <hr />
      <h2>function(函式)</h2>
      {/* 不能直接渲染，有警告，並非React Child */}
      {/* https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {() => {}} */}
      <hr />
    </>
  )
}
