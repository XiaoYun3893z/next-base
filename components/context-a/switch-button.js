import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'

export default function SwitchButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      切換為:{' '}
      <button onClick={toggleTheme}>
        {theme === 'light' ? (
          <>
            <FaRegMoon />
            暗黑
          </>
        ) : (
          <>
            <FaRegSun />
            明亮
          </>
        )}
      </button>
    </>
  )
}
