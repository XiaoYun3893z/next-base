import { createContext } from 'react'

// 1.建立與導出它:
// defaultValue可以使用有意義的預設值，或使用null(用於除錯)
// 參考: https://react.dev/reference/react/createContext#parameters
const ThemeContext = createContext(null)

// 設定名稱(除錯用，搭配瀏覽器react dev-tools)
ThemeContext.displayName = 'MyThemeContext'

export { ThemeContext }
