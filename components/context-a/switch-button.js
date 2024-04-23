import { useTheme } from '@/hooks/use-theme'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'

export default function SwitchButton() {
  const { theme, toggleTheme } = useTheme()

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
