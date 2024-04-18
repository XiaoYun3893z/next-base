import { useState } from 'react'
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  // 記錄點按時的評分
  const [rating, setRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {Array(5)
          .fill(1)
          .map((v, i) => {
            // 每個星星圖示按鈕的分數
            const score = i + 1

            return (
              <button
                // 從初次渲染到應用程式執行過程中，都不會有新增、刪除、修改、排序…的情況
                // 才能使用index(索引)當key
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  setRating(score)
                }}
              >
                <span
                  className={score <= rating ? styles['on'] : styles['off']}
                >
                  &#9733;
                </span>
              </button>
            )
          })}
        <span>你選了{rating}分</span>
      </div>
    </>
  )
}
