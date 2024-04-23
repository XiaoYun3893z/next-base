import { createContext, useContext, useState } from 'react'

// 1.建立與導出它:
const AuthContext = createContext(null)

// 2. 建立一個Context Provider(提供者)元件
// 目的: 提供給最上層元件(_app.js)方便使用，共享狀態在這裡面統一管理
// children指的是被包覆在ThemeProvider中的所有子女元件
export function AuthProvider({ children }) {
  // 共享狀態

  return (
    <AuthContext.Provider
      // 使用value屬性提供資料給元件階層以下的所有後代元件(如果是消費者的話)
      value={{}}
    >
      {children}
    </AuthContext.Provider>
  )
}

// 3. 建立一個包裝useContext的專用名稱函式
// 目的: 讓消費者們(consumer)方便使用，呼叫useTheme就可以取得共享狀態
export const useAuth = () => useContext(AuthContext)
