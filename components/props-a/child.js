import React from 'react'
import PropTypes from 'prop-types'

// 子女元件可以從函式的傳入參數得到父母傳給它的值
// props必定是一個物件
// 在傳入參數中解構提取所有的屬性成為變數
export default function Child({
  title = 'hello', // 這裡可以再使用預設值的寫法，作為預設屬性值
  price = 0,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  // console.log(props)
  return (
    <>
      <h2>Child</h2>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={isConnected ? 'true' : 'false'}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1,2)={sum(1, 2)}</p>
    </>
  )
}

//  設定屬性的限制類型或是必填
Child.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  isConnected: PropTypes.bool,
}
