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

  // radio button group
  const petOptions = ['狗', '貓', '倉鼠']
  // 使用者從多個選項中選擇一個
  const [pet, setPet] = useState('狗')

  // checkbox group - 字串陣列
  const [pets, setPets] = useState(['狗'])

  // 處理核取方塊change事件的函式
  const handleCheckboxGroup = (e) => {
    // 宣告方便使用的tv名稱，取得觸發事件物件的目標值
    const tv = e.target.value
    // 判斷是否有在pets陣列中
    if (pets.includes(tv)) {
      // 如果有===>移出陣列
      const nextPets = pets.filter((v) => v !== tv)
      setPets(nextPets)
    } else {
      // 否則===>加入陣列
      const nextPets = [...pets, tv]
      setPets(nextPets)
    }
  }

  // checkbox group - 物件陣列
  // 設定到初始狀態前，先擴增一個代表是否有選中的屬性checked(布林，預設為false)
  const initState = petOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false }
  })

  // 使用物件陣列狀態
  const [myPets, setMyPets] = useState(initState)

  // 處理checked切換布林的函式
  const handleToggleChecked = (id) => {
    // 1 2 展開每個成員
    const nextMyPets = myPets.map((v, i) => {
      // 如果符合條件(id相等傳入id)，屬性checked的值邏輯反相(true=>false, false=>true)
      if (v.id === id) return { ...v, checked: !v.checked }
      // 否則回傳原本物件
      else return v
    })
    // 3
    setMyPets(nextMyPets)
  }

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
      <div title="radio-button-group">
        <h2>選項按鈕群組(radio-button-group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label
              // 當初次render後不會再改動，即沒有新增、刪除、更動時，可以用索引當key
              key={i}
            >
              <input
                type="radio"
                value={v}
                // 每個radio會用v和目前的狀態(pet)來比較，相符才會是true
                checked={pet === v}
                onChange={(e) => {
                  // 與上面的可控表單元件寫法類似
                  // 或是寫為`setPet(v)`也可以
                  setPet(e.target.value)
                }}
              />
              {v}
            </label>
          )
        })}
      </div>
      <div title="checkbox-group-1">
        <h2>核取方塊群組(checkbox-group)-字串陣列</h2>
        {petOptions.map((v, i) => {
          return (
            <label
              // 當初次render後不會再改動，即沒有新增、刪除、更動時，可以用索引當key
              key={i}
            >
              <input
                type="checkbox"
                value={v}
                checked={pets.includes(v)}
                onChange={handleCheckboxGroup}
              />
              {v}
            </label>
          )
        })}
      </div>
      <div title="checkbox-group-2">
        <h2>核取方塊群組(checkbox-group)-物件陣列</h2>
        {myPets.map((v, i) => {
          return (
            <label key={v.id}>
              <input
                type="checkbox"
                checked={v.checked}
                onChange={() => {
                  handleToggleChecked(v.id)
                }}
              />
              {v.label}
            </label>
          )
        })}
      </div>
    </>
  )
}
