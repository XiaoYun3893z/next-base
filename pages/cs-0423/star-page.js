import { useState } from 'react'
import Star from '@/components/star'

export default function StarPage() {
  const [rating1, setRating1] = useState(1)
  const [rating2, setRating2] = useState(2)

  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <hr />
      {/* 對照組: 完全沒有屬性的元件 */}
      <Star />
      <hr />
      {/* 測試組 */}
      <p>目前rating1評分: {rating1}</p>
      <Star initRating={rating1} onRatingChange={setRating1} color="green" />
      <hr />
      <p>目前rating2評分: {rating2}</p>
      <Star
        initRating={rating2}
        onRatingChange={setRating2}
        maxCount={8}
        color="#ff6600"
      />
    </>
  )
}
