import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

// 資料夾的中的`[pid].js`檔案代表這路由中，除了根路由與靜態路由之外的所有路由，例如 `/product/123` 就是這個檔案
// 資料來源:
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}

export default function Detail() {
  // 第1步. 宣告能得到動態路由pid的路由器
  // router.query(物件)，其中包含了pid屬性值
  // router.isReady(布林)，如果是true代表頁面已完成水合作用，可以得到pid
  const router = useRouter()

  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  const getProduct = async (pid) => {
    const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}`

    // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
    try {
      const res = await fetch(url)
      const data = await res.json()

      console.log(data)

      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
      // 確定資料是物件資料類型才設定到狀態中(最基本的保護)
      if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        setProduct(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式3: didMount+didUpdate
  // 第2步: 在useEffect中監聽router.isReady為true時，才能得到網址上的pid，之後向伺服器要資料
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { pid } = router.query
      getProduct(pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <h1>商品詳細頁(查詢字串qs)</h1>
      <hr />
      <Link href="/cs-0507/product-qs/list">連至 列表頁</Link>
      <p>ID: {product.id}</p>
      <p>名稱: {product.name}</p>
      <p>價格: {product.price}</p>
    </>
  )
}
