import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

// 只需要isbn, fav不需要整個book物件的內容
export default function FavIcon({ isbn, fav, handleToggleFav }) {
  return (
    <>
      <Image
        onClick={() => {
          handleToggleFav(isbn)
        }}
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
      />
    </>
  )
}
