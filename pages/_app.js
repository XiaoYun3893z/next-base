// import '@/styles/globals.css'
// next中只有_app.js可以引入全域樣式，其他頁面不行
// import '@/styles/product-table.css'

//  3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它:
import { ThemeContext } from '@/context/theme'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  // 共享狀態，值可以是 'light' | 'dark'
  const [theme, setTheme] = useState('light')

  // 切換布景專用的
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeContext.Provider
      // 使用value屬性提供資料給元件階層以下的所有後代元件(如果是消費者的話)
      value={{ theme, toggleTheme }}
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeContext.Provider>
  )
}
