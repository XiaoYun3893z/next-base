import { useState } from 'react'

export default function ControlledForm() {
  // input-text
  const [inputText, setInputText] = useState('')
  // textarea
  const [textareaText, setTextareaText] = useState('')
  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)
  // input-date
  // 輸入進來的文字格式是yyyy-mm-dd字串
  const [inputDateText, setInputDateText] = useState('')

  // 時間日期物件與yyyy-mm-dd字串互轉的兩個函式
  // 時間日期物件 ===> yyyy-mm-dd字串
  const dateToString = (date = null) =>
    date instanceof Date ? date.toISOString().split('T')[0] : ''
  // yyyy-mm-dd字串 ===> 時間日期物件
  const stringToDate = (str) => new Date(str)
  // input-date
  // 記錄的是時間日期物件
  const [inputDateObject, setInputDateObject] = useState(
    stringToDate('2024-01-01')
  )

  return (
    <>
      <h1>可控表單元件範例</h1>
      <div title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          // 1.value屬性必需對應到某個 state(狀態)
          value={inputText}
          //2. 元件的事件處理函式必需可以更動到屬性的對應 state(狀態)值
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <h2>密碼輸入框(input-password)</h2>
        <input
          //用showPassword來決定type是什麼，true是text可以呈現輸入的文字
          type={showPassword ? 'text' : 'password'}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />{' '}
        <input
          type="checkbox"
          // checkbox與radio button是以checked決定呈現的狀態
          checked={showPassword}
          onChange={(e) => {
            // 第一種寫法，使用事件物件的checked值
            setShowPassword(e.target.checked)
            // 第二種寫法，布林值切換(toggle)
            //setShowPassword(!showPassword)
          }}
        />
        顯示密碼
        <h2>日期輸入框(input-date)- 字串</h2>
        <input
          type="date"
          value={inputDateText}
          onChange={(e) => {
            setInputDateText(e.target.value)
          }}
        />
        <h2>日期輸入框(input-date) - 物件</h2>
        <input
          type="date"
          // 呈現時轉為字串值
          value={dateToString(inputDateObject)}
          onChange={(e) => {
            // 進入狀態時，要轉回時間日期物件
            setInputDateObject(stringToDate(e.target.value))
          }}
        />
      </div>
      <div title="textarea">
        <h2>文字輸入區域(textarea)</h2>
        {/* 在html中原本是使用開頭與結尾標記來包住文字使用，在react中被改為使用value屬性和onChange來對應state */}
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </div>
    </>
  )
}
