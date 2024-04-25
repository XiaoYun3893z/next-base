import { useState } from 'react'

export default function LoginForm() {
  // 狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  return (
    <>
      <h1>會員登入表單</h1>
      <form onSubmit={() => {}}>
        <div>
          <label>
            {/* 使用表單元素都應給name屬性 */}
            帳號: <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            密碼: <input type="password" name="password" />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 顯示密碼
            {/* <button type="button">顯示密碼</button> */}
          </label>
        </div>
        <div>
          <button type="submit">登入</button>
        </div>
      </form>
    </>
  )
}
