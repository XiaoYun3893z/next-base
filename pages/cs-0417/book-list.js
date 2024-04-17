import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function BookList() {
  // 設定到初始狀態前，先擴增一個代表是否有加入收藏的屬性fav(布林，預設為false)
  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  const [books, setBooks] = useState(initState)

  // 處理fav切換布林的函式
  const handleToggleFav = (isbn) => {
    // 1 2 展開每個成員
    const nextBooks = books.map((v, i) => {
      // 如果符合條件(isbn相等傳入isbn)，屬性fav的值邏輯反相(true=>false, false=>true)
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      // 否則回傳原本物件
      else return v
    })
    // 3
    setBooks(nextBooks)
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    onClick={() => {
                      handleToggleFav(v.isbn)
                    }}
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}