import List from '@/components/context-a/list'
import SwitchButton from '@/components/context-a/switch-button'
// 用於取代a元件的特別元件，可以在不同頁面保持住狀態
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page1() {
  const router = useRouter()

  return (
    <>
      <h1>Page1</h1>
      <SwitchButton />
      <List />
      <hr />
      <button
        onClick={() => {
          router.push('/cs-0423/context-a/page2')
        }}
      >
        router-到Page2(保持住狀態)
      </button>
      <hr />
      {/*  用於取代a元素的特別元件，可以在不同頁面保持住狀態 */}
      <Link href="/cs-0423/context-a/page2">Link-到Page2(保持住狀態)</Link>
      <hr />
      <a href="/cs-0423/context-a/page2">a-到Page2(狀態會重置)</a>
    </>
  )
}
