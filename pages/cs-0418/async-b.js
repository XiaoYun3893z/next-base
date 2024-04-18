import { useState } from 'react'

export default function AsyncB() {
  // 文字輸入框使用，輸入的密碼字串
  const [password, setPassword] = useState('')
  // 評分
  const [grade, setGrade] = useState(0)

  const calcGrade = (str) => {
    let score = 0

    if (str.length >= 4) score += 2
    if (str.length >= 6) score += 2
    if (str.length >= 8) score += 2

    return score
  }

  return (
    <>
      <h1>setState異步說明範例-B</h1>
      <hr />
      輸入密碼字串:
      <input
        type="text"
        value={password}
        onChange={(e) => {
          console.log(e.target.value)
          setPassword(e.target.value)
          // 錯誤寫法，上面那行設定password在這裡還沒完成
          // setGrade(calcGrade(password))
          // 正確寫法，用事件觸發當下的目標對象值
          setGrade(calcGrade(e.target.value))
        }}
      />
      <p>密碼強度分數: {grade}</p>
    </>
  )
}
