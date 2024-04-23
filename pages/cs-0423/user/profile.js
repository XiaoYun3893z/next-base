import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function Profile() {
  const { auth } = useAuth()

  return (
    <>
      <h1>會員個人資料頁</h1>
      <hr />
      <p>帳號: {auth.userData.username}</p>
      <p>姓名: {auth.userData.name}</p>
      <p>Email: {auth.userData.email}</p>
      <hr />
      <Link href="/cs-0423/user/login">到 會員個人資料頁</Link>
    </>
  )
}
