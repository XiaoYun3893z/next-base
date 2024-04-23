import List from '@/components/context-a/list'
// 用於取代a元件的特別元件，可以在不同頁面保持住狀態
import Link from 'next/link'
// 使用路由(客戶端)來作路由控制用
import { useRouter } from 'next/router'

export default function Page2() {
  const router = useRouter()

  return (
    <>
      <h1>Page2</h1>
      <List />
      <hr />
      <button
        onClick={() => {
          router.push('/cs-0423/context-a/page1')
        }}
      >
        router-到Page1(保持住狀態)
      </button>
      <hr />
      {/*  用於取代a元件的特別元件，可以在不同頁面保持住狀態 */}
      <Link href="/cs-0423/context-a/page1">Link-到Page1(保持住狀態)</Link>
      <hr />
      <a href="/cs-0423/context-a/page1">a-到Page1(狀態會重置)</a>
    </>
  )
}
