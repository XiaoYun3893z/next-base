import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function Login() {
  const { auth, login, logout } = useAuth()

  return (
    <>
      <h1>會員登入頁</h1>
      <hr />
      <p>目前登入狀態: {auth.isAuth ? '已登入' : '尚未登入'}</p>
      <button
        onClick={() => {
          if (auth.isAuth) logout()
          else login()
        }}
      >
        {auth.isAuth ? '登出(logout)' : '登入(login)'}
      </button>
      <hr />
      <Link href="/cs-0423/user/profile">到 會員個人資料頁</Link>
    </>
  )
}
