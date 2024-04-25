import { useState } from 'react'

export default function LoginForm() {
  // 狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    // 可以利用e.target觀察目前是在輸入或操作哪個欄位上
    console.log(e.target.name, e.target.type, e.target.value)
    // ES6: computed property names (計算得來的屬性名稱)
    // [e.target.name]: e.target.value }
    // ^^^^^^^^^^^^^^^ 這裡可以動態的代入變數值或表達式，計算出物件屬性名稱(字串)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>會員登入表單</h1>
      <form onSubmit={() => {}}>
        <div>
          <label>
            {/* 使用表單元素都應給name屬性 */}
            帳號:{' '}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label>
            密碼:{' '}
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => {
              setShowPassword(e.target.checked)
            }}
          />
          顯示密碼
        </div>
        <div>
          <button type="submit">登入</button>
        </div>
      </form>
    </>
  )
}
