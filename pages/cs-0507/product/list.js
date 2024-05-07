import { useState, useEffect } from 'react'
import Link from 'next/link'

import { loadProducts } from '@/services/product'

// 資料夾的中的`list.js`檔案代表靜態or固定的路由，例如 `/product/list` 就是這個檔案

// 資料來源:
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 範例
// const sample = [
//   {
//     id: 1,
//     picture: 'https://via.placeholder.com/150',
//     stock: 5,
//     name: 'iPhone 12 Pro',
//     price: 25000,
//     tags: '蘋果,大螢幕',
//   },
//   {
//     id: 2,
//     picture: 'https://via.placeholder.com/150',
//     stock: 5,
//     name: 'iPhone 12',
//     price: 15000,
//     tags: '蘋果,小螢幕',
//   },
// ]

export default function List() {
  // 注意1: 初始值至少要空白陣列。首次render會使用初始值，對應由伺服器得到的物件陣列模型。
  // 注意2: 在應用程式執行過程中，狀態一定都要保持陣列資料類型
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
    try {
      const data = await loadProducts()
      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
      // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
      if (Array.isArray(data)) {
        setProducts(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式2: 元件初次渲染之後(after)執行一次，之後不會再執行
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-0507/product/${v.id}`}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
