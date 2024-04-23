import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'

export default function List() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <ul className={theme}>
        <li>11111</li>
        <li>22222</li>
        <li>11111</li>
        <li>22222</li>
      </ul>
      <style jsx>
        {`
          .light {
            color: blue;
            background-color: white;
          }

          .dark {
            color: pink;
            background-color: black;
          }
        `}
      </style>
    </>
  )
}
